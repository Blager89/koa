const Router = require('koa-router');
const { authenticated } = require('../../middlewares');

const router = new Router({ prefix: '/api' });


const heandler = {
  async signin(ctx) {
    ctx.body = '123';
    const u = ctx.state.user_id;
    console.log(u);
  }
};

router.post('/signin', authenticated, heandler.signin);

module.exports = router.routes();
