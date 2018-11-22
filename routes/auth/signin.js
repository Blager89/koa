const Router = require('koa-router');
const { authenticated } = require('../../middlewares');
const { validate } = require('../../libs');

const router = new Router({ prefix: '/api' });

const rule = {
  email: 'required|email',
  password: 'required|min:6'
};

const heandler = {
  async signin(ctx) {
    await validate(ctx.request.body, rule);
  }
};

router.post('/signin', authenticated, heandler.signin);

module.exports = router.routes();
