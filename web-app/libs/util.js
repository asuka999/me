const querystring = {
  parse: () => {

  },
  stringify: data => {
    const tmp = []
    for (const key in data) {
      tmp.push([key, encodeURIComponent(data[key])].join('='))
    }
    return tmp.join('&')
  }
}

function $http(url, opt = {}) {
  if (typeof url !== 'string') {
    opt = url
    url = opt.url
  }
  opt.method = opt.method || 'get'
  const req = new window.XMLHttpRequest

  // if get, set up data
  if (opt.method.toLowerCase() === 'get' && opt.data) {
    if (typeof opt.data !== 'string') {
      opt.data = querystring.stringify(opt.data)
    }
    url = `${url}?${opt.data}`
    opt.data = null
  }

  // req
  req.open(opt.method, url)
  opt.timeout && (req.timeout = opt.timeout)

  // set up data and contentType
  // do not for form, cause: in chrome formData auto multipart/data, string auto text/xml
  const {header} = opt
  let contentType = header && header.contentType
  if (opt.data && !contentType && window.FormData.prototype.isPrototypeOf(opt.data)) {
    if (typeof opt.data === 'string') {
      contentType = 'application/x-www-form-urlencoded'
    } else {
      opt.data = JSON.stringify(opt.data)
      contentType = 'application/json'
    }
  }
  contentType && req.setRequestHeader('Content-Type', contentType)
  req.send(opt.data)

  // listen
  const events = ['load', 'error', 'timeout', 'progress']

  function listen(e) {
    if (!opt[e]) {
      return
    }
    req.addEventListener(e, function handler() {
      const response = {}
      try {
        response.data = JSON.parse(req.response)
      } catch (e) {}
      Object.setPrototypeOf(response, {
        readyState: req.readyState,
        status: req.status,
        statusText: req.statusText,
        responseText: req.responseText,
        responseXML: req.responseXML,
        getAllHeaders: req.getAllResponseHeaders.bind(req),
        getHeader: req.getResponseHeader.bind(req)
      })
      opt.load && opt.load(response)
    })
  }
  events.forEach(listen)

  return events.reduce((prev, cur) => ({
    ...prev,
    [cur]: handler => {
      opt[cur] = handler
      listen(cur)
    }
  }), {})
}

import isomorphicFetch from 'isomorphic-fetch'
import {camelizeKeys} from 'humps'

function resolveUrl(url) {
  return !process.env.ORIGIN || /^\/\//.test(url)
    ? url : `${process.env.ORIGIN}${url}`
}

const NO_CONTENT_METHODS = ['get', 'head']

function fetch(url, opts = {}) {
  const credentials = opts.mode === 'cors' ? null : 'include'
  if (opts.body && (!opts.method || NO_CONTENT_METHODS.includes(opts.method))) {
    url = `${url}?${querystring.stringify(opts.body)}`
    delete opts.body
  }

  return isomorphicFetch(
    resolveUrl(url),
    // eslint-disable-next-line no-undef
    opts.body && typeof FormData !== 'undefined' && FormData.isPrototypeOf(opts.body) ? {
      credentials,
      ...opts
    } : {
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      credentials,
      ...opts,
      body: JSON.stringify(opts.body)
    }
  )
  .then(res => {
    if (res.status > 300) {
      const err = new Error('request fail')
      err.message = {response: res}
      throw err
    }
    if (res.headers.get('content-type').indexOf('application/json') >= 0) {
      return res.json().then(json => camelizeKeys(json))
    }
    return res.text()
  })
  .catch(err => {
    console.log('err in fetch: ', err)
    throw err
  })
}

function $extend (t = {}, src) {
  for (const key in src) {
    if (typeof src[key] !== 'object' || typeof src[key] === 'undefined' || src[key] === null) {
      t[key] = src[key]
    } else {
      if (Array.prototype.isPrototypeOf(src[key])) {
        t[key] = $extend([].slice.call(src[key], 0), src[key])
      } else {
        const C = src[key].constructor
        t[key] = $extend(new C(src[key]), src[key])
      }
    }
  }
  return t
}

function rand (max, min = 0) {
  return Math.floor(Math.random() * (max - min)) + min
}

const min = 1000 * 60
const hour = min * 60
const day = hour * 24
const month = day * 30
const year = month * 12

function time(val) {
  var d = new Date() - new Date(val)
  if (d > year) {
    return d.toLocaleDateString()
  } else if (d > month) {
    return parseInt(d / month) + '月前'
  } else if (d > day) {
    return parseInt(d / day) + '天前'
  } else if (d > hour) {
    return parseInt(d / hour) + '小时前'
  } else {
    return Math.ceil(d / min) + '分钟前'
  }
}
export {$http, $extend, rand, fetch, time}
