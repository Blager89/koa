const Router = require('koa-router');
const { knex } = require('../config/database');
const { authenticated } = require('../middlewares');

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

router.get('/', authenticated, heandler.index);
router.get('/qwe', heandler.singleProduct);
module.exports = router.routes();
