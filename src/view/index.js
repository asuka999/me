import fs from 'fs'
import path from 'path'
import {PassThrough} from 'stream'
import {createBundleRenderer} from 'vue-server-renderer'
import serialize from 'serialize-javascript'
import cache from 'lru-cache'

process.env.VUE_ENV = 'server'

// TODO: hot
const helmet = {
  title: 'asuka',
  style: '/style/style.css',
  script: '/script/client.js'
}

function compileHTML (vars) {
  return fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
    .replace(/\{\{(\w+)\}\}/g, (_, $1) => vars[$1] || `{{${$1}}}`).split('{{APP}}')
}

const html = compileHTML(helmet)

const bundle = fs.readFileSync(path.resolve(__dirname, 'server.js'), 'utf-8')
// import devServer from '../build/devServer'
// if (process.env.NODE_ENV) {
//   bundle = fs.readFileSync(path.resolve(__dirname, 'server.js'), 'utf-8')
// } else {
//   devServer(router, devBundle => { bundle = devBundle })
// }

const renderer = createBundleRenderer(bundle, {
  cache: cache({
    max: 1000,
    maxAge: 1000 * 60 * 15
  })
})

const index = async ctx => {
  ctx.type = 'text/html; charset=utf-8'
  ctx.set('Connection', 'keep-alive')
  const context = {
    url: ctx.req.url,
    headers: ctx.req.headers,
    currentUser: ctx.session.user
  }
  const body = ctx.body = new PassThrough
  body.write(html[0])
  const renderStream = renderer.renderToStream(context)
  renderStream.pipe(body, {end: false})
  await new Promise(resolve => renderStream.once('end', resolve))
  body.write(`<script>window.__INITIAL_STATE__=${
    serialize(context.initialState, {isJSON: true})
  }</script>`)
  body.end(html[1])
}

export default index
