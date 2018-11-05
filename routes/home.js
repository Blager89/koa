const Router = require('koa-router');
const knex = require('./../knexfile');
const router = new Router({
  prefix: '/api'
});

const heandler = {
  async index(ctx) {
    const allProducts = await knex('products').select();
    ctx.body = allProducts;


  },

  async postTest(ctx) {
    ctx.body = ctx.request.body;
  }
};


router.get('/', heandler.index);
router.post('/', heandler.postTest);

module.exports = router.routes();