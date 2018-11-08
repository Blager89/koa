const Router = require('koa-router');
const {knex} = require('../config/database');
const { Products } = require('../models');
const router = new Router();


const heandler = {
  async index(ctx) {
    console.log(Products.where({id:1}).count());
    ctx.body = '';
  },

  async postTest(ctx) {
    ctx.body = ctx.request.body;
  }
};


router.get('/', heandler.index);
router.post('/', heandler.postTest);

module.exports = router.routes();