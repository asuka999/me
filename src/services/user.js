import User from '../models/User'
import config from '../config'
export default {
  find: async user => {
    return await User.find(user, {fields: {password: 1}})
  },
  words: async user => {
    const u = await User.find(user, {fields: {words: 1}})
    return u.words
  },
  profile: async user => {
    return await User.find(user)
  },
  update: async profile => {
    return await User.update({name: config.user.name}, {$set: profile})
  }
}

