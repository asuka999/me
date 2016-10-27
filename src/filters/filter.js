export default {
  async auth(ctx, nxt) {
    if (!ctx.session.user) {
      ctx.throw(401)
    } else await nxt()
  }
}
