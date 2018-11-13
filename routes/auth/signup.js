const Router = require('koa-router');
const { validate } = require('../../libs');
const { User } = require('../../models');


const router = new Router({ prefix: '/api' });


const heandler = {
  async signup(ctx) {
    await validate(ctx.request.body, {
      email: 'required|email',
      password: 'required|min:6'
    });
    const { fullname, email, password } = ctx.request.body;
    const userCount = await User.where({ email }).count();
    if (userCount) {
      ctx.throw(409, 'User with this email already registered');
    }
    await new User({
      fullname,
      email,
      password
    }).save();

    ctx.body = '';
  }
};

router.post('/signup', heandler.signup);
module.exports = router.routes();
