function $http(url, opt) {
    if (typeof url !== "string") {
        opt = url;
        url = opt.url;
    }
    opt = opt || {};
    var req = new XMLHttpRequest();
    opt.method = opt.method || 'get';

    // if get, set up data
    if (opt.method.toLowerCase() === 'get' && opt.data) {
        if (typeof opt.data != 'string') {
            //还有arr 呢？ 
            var tmp = [];
            for (let key in opt.data) {
                tmp.push([key, opt.data[key]].join('='));
            }
            opt.data = tmp.join('&');
        }
        url = url + '?' + opt.data;
        opt.data = undefined;
    }

    //req
    req.open(opt.method, url);

    // set up data and contentType; 
    // do not for form, cause : in chrome formData auto multipart/data, string auto text/xml 
    if (opt.data && !opt.contentType && Object.getPrototypeOf(opt.data) !== FormData.prototype) {
        if (typeof opt.data === "string") {
            opt.contentType = "application/x-www-form-urlencoded";
        } else {
            opt.data = JSON.stringify(opt.data);
            opt.contentType = "application/json";
        }
    }
    opt.contentType && req.setRequestHeader("Content-Type", opt.contentType);

    // send 
    opt.data ? req.send(opt.data) : req.send();

    // listen :
    var events = {
        load() {
            let response = {};
            try {
                response.data = JSON.parse(req.response);
            } catch (e) {}
            Object.setPrototypeOf(response, {
                readyState : req.readyState,
                status: req.status,
                statusText: req.statusText,
                responseText: req.responseText,
                responseXML: req.responseXML,
                getAllHeaders: req.getAllResponseHeaders.bind(req),
                getHeader: req.getResponseHeader.bind(req)
            });
            opt.load && opt.load(response);
        },
        error() {
            let response = {};
            Object.setPrototypeOf(response, {
                readyState : req.readyState,
                status: req.status,
                statusText: req.statusText,
                responseText: req.responseText,
                responseXML: req.responseXML,
                getAllHeaders: req.getAllResponseHeaders.bind(req),
                getHeader: req.getResponseHeader.bind(req)
            });
            opt.error && opt.error(response);
        }
    }

    function cb(key) {
        opt[key] && req.addEventListener(key, events[key]);
    }
    var keys = ['load', 'error'];
    for (let key of keys) {
        cb(key);
    }

    opt.time && (req.timeout = opt.time);
    opt.timeout && req.addEventListener('timeout', function() {
        console.log('timeout', req.timeout)
        opt.timeout(req);
    });
    opt.progress && req.addEventListener('progress', function() {
        console.log(req.status);
        console.log("progress");
    });
    return {
        load: function(handler) {
            opt.load = handler;
            cb('load');
        },
        error: function(handler) {
            opt.error = handler;
            cb('error');
        },
    }
}

function $extend(t,src){
  for (var key in src){
    if(typeof src[key]!== 'object' || typeof src[key] == 'undefined'){
      t[key] = src[key]
    } else {

      if(Date.prototype.isPrototypeOf(src[key])){
        t[key] = extend(new Date(src[key]), src[key]);
      }else{
        var c = src[key].constructor;
        t[key] = $extend(new c, src[key])
      }
    }
  }
  return t;
}

export { $http, $extend }
