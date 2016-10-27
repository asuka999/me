import {fetch} from '../libs/util'
import {types} from './mutations'

const {
  LOGIN,
  POSTS,
  WORDS,
  NOTIFY,
  DELETE_POST,
  UPDATE_POST
} = types
// window && window.location.protocol === 'https:' ? 'https://up.qbox.me' :
const UPLOAD_URL = 'http://upload.qiniu.com'

export default {
  login(context, payload) {
    return fetch('/login', {
      method: 'post',
      body: payload
    })
    .then(payload =>
      context.commit(LOGIN, payload))
  },
  auth({commit}, payload) {
    commit(LOGIN, payload)
  },
  index({commit}) {
    return fetch('/index')
    .then(payload => commit('index', payload))
  },
  upload(_, files) {
    return fetch('/token')
    .then(({token}) =>
      Promise.all(files.map(file => {
        const body = new window.FormData
        body.append('file', file)
        body.append('token', token)
        return fetch(UPLOAD_URL, {
          method: 'post',
          mode: 'cors',
          body
        })
      }))
    )
    .then(datas => datas.map(({url}) => url))
  },

  posts({commit}) {
    return fetch('/post')
    .then(payload => commit(POSTS, payload))
  },
  getPost({commit}, id) {
    return fetch('/post', {
      body: {id}
    })
    .then(post => commit('getPost', post))
  },
  post({commit, dispatch}, body) {
    const method = 'post'
    return (body.type === 'photo'
      ? dispatch('upload', body.content)
        .then(content => fetch('/post', {
          method,
          body: {...body, content}
        }))
        : fetch('/post', {method, body})
      )
    .then(payload => commit('post', payload))
  },
  updatePost({commit, dispatch}, body) {
    return fetch('/post', {
      method: 'put',
      body
    }).then(payload => commit(UPDATE_POST, payload))
  },
  deletePost({commit}, id) {
    return fetch('/post', {
      method: 'delete',
      body: {id}
    })
    .then(() => commit(DELETE_POST, id))
  },
  words({commit}) {
    return fetch('/words')
    .then(payload => commit(WORDS, payload))
    .catch(err => commit(NOTIFY, {err}))
  }
}
