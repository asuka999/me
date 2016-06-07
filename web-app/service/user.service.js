import {$http} from '../js/util'

export default{
  theme(){
    return new Promise((resolve,reject)=>{
      $http('/theme', {
        load(res){
          res.status == 200 ? resolve(res.data.data) : reject(res);
        },
        error : reject 
      })
    })
  },
  login(user){

    return new Promise((resolve,reject)=>{
      $http({
        method :'POST',
        url: '/login',
        data: user,
        load(res){
          res.status == 200 ? resolve(res.data.data) : reject(res);
        }
      })
    })
  },

  insertImg(file, token){
    return new Promise((resolve,reject)=>{
      var fd = new FormData();
      fd.append('file', file)
      fd.append('token', token);
      $http({
        method: 'POST',
        url: "http://upload.qiniu.com",
        data: fd,
        load: function(res) {
       
          res.status == 200 ?
          resolve(res.data.url) : 
          reject(res)
        },
        error: reject,
      })
    }).then((url)=>{
      return new Promise((resolve,reject)=>{
        $http({
          method :'post',
          url: '/user/img',
          data: {img : url},
          load(res){
         
            res.status == 200 ? resolve(url) : reject(res);
          },
          error : reject
        })
      })
    })
  },
  deleteImg(img){
    return new Promise((resolve,reject)=>{
      $http({
        method :'delete',
        url: '/user/img',
        data: img,
        load(res){
          console.log('delete img', res);
          res.status == 200 ? resolve(img) : reject(res);
        }
      })
    })
  },  
  profile(p){
    return new Promise((resolve,reject)=>{
     $http({
      method :'put',
      url: '/user/profile',
      data: p,
      load(res){
        console.log('profile', res);
        res.status == 200 ? resolve(res.data.msg) : reject(res);
      }
    })
   })
  },
}