const Router = require('koa-router');
const { knex } = require('../config/database');
const { authenticated } = require('../middlewares');

const router = new Router();


const heandler = {
  async index(ctx) {
    const products = await knex('products')
      .select();

    ctx.body = products;
  }
};

router.get('/qwe', heandler.index);
module.exports = router.routes();
