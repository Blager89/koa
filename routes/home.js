const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});

const heandler = {
  async index(ctx) {
    ctx.body;
  },

  async postTest(ctx) {
    ctx.body;
  }
};


router.get('/:id', heandler.index);
router.post('/', heandler.index);

module.exports = router.routes();