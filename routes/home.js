const Router = require('koa-router');
const { Products } = require('../models');

const router = new Router();


const heandler = {
  async index(ctx) {
    const prod = await Products.fetchAll({ withRelated: ['categories', 'media'] });
    ctx.body = prod;
  }
};

router.get('/qwe', heandler.index);
module.exports = router.routes();
