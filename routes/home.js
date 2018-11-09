const Router = require('koa-router');
const { knex } = require('../config/database');

const router = new Router();


const heandler = {
  async index(ctx) {
    const products = await knex('products')
      .select();
    ctx.body = products;
  },

  async singleProduct(ctx) {
    ctx.body = 123;
  }
};

router.get('/', heandler.index);
router.get('/qwe', heandler.singleProduct);
module.exports = router.routes();
