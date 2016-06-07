import User from '../models/User'
import config from '../config'
export default {
  find : async(user)=>{
    return await User.find(user)
  },
  insertImg : async(img)=>{
    return await User.update({name:config.user.name},{$addToSet:{imgs : img }},{upsert: true});
  },
  deleteImg : async(img)=>{
    return await User.update({name:config.user.name}, {$pull:{imgs:{$in:[img]}}})
  },
  update :async(p)=>{
    return await User.update({name:config.user.name}, {$set:p })
  }
}