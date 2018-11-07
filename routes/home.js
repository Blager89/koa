const Router = require('koa-router');
const {knex} = require('../config/database');
const router = new Router();


const heandler = {
  async index(ctx) {
    const x = await knex('products')
      .select();
    ctx.body = x;
  },

  async postTest(ctx) {
    ctx.body = ctx.request.body;
  }
};


router.get('/', heandler.index);
router.post('/', heandler.postTest);

module.exports = router.routes();