import {fetch} from './libs/util'
import {app, router, store} from './app'

// todo: fetch and then router change child components
function fetchData(component) {
  return Promise.resolve(component.fetch && component.fetch(store))
  .then(data =>
    component.components ? Promise.all(
      Object.keys(component.components).map(child => fetchData(component.components[child]))
    ).then(datas => [data, ...datas])
    : data
  )
}

// fetch.context 有保证吗？
export default context => {
  router.push(context.url)
  fetch.context = context.headers
  if (context.currentUser) {
    store.dispatch('auth', context.currentUser)
  }
  return Promise.all(router.getMatchedComponents()
    .map(component => fetchData(component)))
  .then((...args) => {
    context.initialState = store.state
    return app
  })
}
