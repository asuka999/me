import {$http} from '../js/util'

export default{
  token(){
    return new Promise((resolve, reject)=>{
      $http('/token', {
        load(res){
          res.status == 200 ? resolve(res.data.data) : reject(res);
        }
      })
    })
  },
}