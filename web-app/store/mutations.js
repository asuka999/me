import {depascalize} from 'humps'

const mutations = {
  login(state, payload) {
    state.currentUser = payload
  },
  index(state, payload) {
    state.posts[payload.id] = payload
  },

  posts(state, payload) {
    payload.forEach(post => {
      state.posts[post.id] = post
    })
  },
  getPost(state, payload) {
    state.posts[payload.id] = payload
  },
  post(state, payload) {
    state.posts[payload.id] = payload
  },
  updatePost(state, payload) {
    state.posts[payload.id] = {
      ...state.posts[payload.id],
      ...payload
    }
  },
  deletePost(state, payload) {
    state.posts[payload] = null
    delete state.posts[payload] // TODO: work ????
  },
  words(state, payload) {
    state.words = payload
  },
  notify(state, payload) {
    const {type = 'global', ...notification} = payload
    state.notifications[type] = notification
  }
}

const types = Object.keys(mutations).reduce((prev, cur) => ({
  ...prev,
  [depascalize(cur).toUpperCase()]: cur
}), {})

export {types}
export default mutations
