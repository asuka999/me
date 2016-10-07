import {app, router, store} from './app'

export default context => {
  router.push(context.url)
  return Promise.all(router.getMatchedComponents()
    .map(component => component.fetch && component.fetch(store)))
  .then((...args) => {
    context.initialState = store.state
    return app
  })
}
