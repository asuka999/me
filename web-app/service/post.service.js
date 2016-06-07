import {$http} from '../js/util'
export default {
  addImg(file){
    return new Promise((resolve,reject)=>{
      $http('/token', {
        load: function(res) {
          res.status == 200 ?
          resolve(res.data.data) : 
          rejece(res)
        },
        error: reject,
      })
    })
    .then((token)=>{
      return new Promise((resolve,reject)=>{
        var fd = new FormData();
        fd.append('file', file);
        fd.append('token', token);
        $http({
          method: 'POST',
          url: location.protocol === 'https:' ? 'https://up.qbox.me' : 'http://upload.qiniu.com',
          data: fd,
          load: function(res) {
            res.status == 200 ?
            resolve(res.data.url) : 
            rejece(res)
          },
          error: reject,
        })
      })
      
    })
  },
  get(query){
    return new Promise((resolve,reject)=>{
      $http({
        url : '/post',
        data : query,
        load(res){
          if(res.status == 200){
            var a = res.data.data
            a.date = new Date(a.date)
            a.updateDate = new Date(a.updateDate);
            resolve(a)
          }else reject(res) 
        },
        error : reject
      })
    })
  },
  update(md){
    return new Promise((resolve,reject)=>{
      $http({
        url: '/post',
        method:'put',
        data : md, 
        load(res){
          res.status == 200 ? 
          resolve(res.data.data) : 
          reject(res)
        },
        error: reject
      })
    });
  },
  query(query){
    return new Promise((resolve,reject)=>{
      $http({
        url : '/post',
        data : query,
        load(res){
          if(res.status == 200){
            for(var a of res.data.data){
              a.date = new Date(a.date)
              a.updateDate = new Date(a.updateDate);
            }
            resolve(res.data.data)
          }else reject(res) 
        },
        error : reject
      })
    })
  },
  photo(post, token){
    post.type = "photo"
    return new Promise((resolve,reject)=>{
      var i = 0, imgs = [], errfiles = [];
      for(var f of post.content){
        var fd = new FormData();
        fd.append('file', f.file);
        fd.append('token', token);
        $http({
          method: 'POST',
          url: "http://upload.qiniu.com",
          data: fd,
          load: function(res) {
            i++;
            res.status == 200 ?
            imgs.push(res.data.url) : 
            errfiles.push(f)
            if( i===post.content.length){
              imgs.length && resolve(imgs);
              errfiles.length && reject(errfiles);
            }
          },
          error: reject,
        })
      }    
    }).then((imgs)=>{
      post.content = imgs;
      return new Promise((resolve, reject)=>{
        $http({
          method: 'POST',
          url: '/post',
          data : post,
          load(res){
            res.status == 200 ? 
            resolve(res.data) :
            reject(res)
          },
          error: reject
        })
      })
    })
  },
  markdown(md){
    return new Promise((resolve,reject)=>{
      $http({
        method: 'POST',
        url: '/post',
        data : md,
        load(res){
          res.status == 200 ? 
          resolve(res.data.data) :
          reject(res)
        },
        error: reject
      })
    })
  },
  delete(data){
    return new Promise((resolve,reject)=>{
      $http({
        method : 'delete',
        url : '/post',
        data : {_id: data._id},
        load(res){
          res.status == 200 ? 
          resolve(res.data.data) : 
          reject(res);
        },
        error : reject,
      })
    })
  }
}