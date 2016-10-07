import Vue from 'vue'
import Vuex from 'vuex'
import {fetch} from '../libs/util'

// window && window.location.protocol === 'https:' ? 'https://up.qbox.me' :
const UPLOAD_URL = 'http://upload.qiniu.com'

Vue.use(Vuex)

const state = {
  posts: {}
}

const actions = {
  login(context, payload) {
    return fetch('/login', {
      method: 'post',
      body: payload
    })
    .then(payload =>
      context.commit('login', payload))
  },
  post({commit}, payload) {
    return fetch('/token')
    .then(({token}) => {
      const {content} = payload
      return Promise.all(content.map(file => {
        const body = new window.FormData
        body.append('file', file)
        body.append('token', token)
        return fetch(UPLOAD_URL, {
          method: 'post',
          mode: 'cors',
          body
        })
      }))
    })
    .then(datas => {
      fetch('/post', {
        method: 'post',
        body: {
          ...payload,
          content: datas.map(({url}) => url)
        }
      })
      .then(payload =>
       commit('post', payload))
    })
  },
  posts({commit}) {
    return fetch('/posts')
    .then(posts => commit('posts', posts))
  },
  getPost({commit}, id) {
    return fetch('/posts', {
      body: {id}
    })
    .then(post => commit('getPost', post))
  },
  removePost({commit}, id) {
    return fetch('/posts', {
      method: 'delete',
      body: {id}
    })
    .then(() => commit('removePost', id))
  },
  words({commit}, val) {
    return fetch('/words', {
      method: 'post',
      body: {val}
    })
  }
}

const mutations = {
  login(state, payload) {
    state.currentUser = payload
  },
  post(state, payload) {
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
  removePost(state, payload) {
    state.posts[payload] = null
    delete state.posts[payload] // TODO: work ????
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})
export default store
