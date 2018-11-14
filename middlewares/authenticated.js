const { validate, JWT } = require('./../libs');
// const { User } = require('../models');

module.exports = async (ctx, next) => {
  await validate(ctx.header, {
    authorization: 'required|regex:/^Bearer\\s{1}([A-z\\.0-9-]+)$/'
  });
  const [, token] = ctx.header.authorization.split(' ');
  const decoded = await JWT.verifyToken(token);
  // ctx.state.user = User.where({ id: decoded.data.id });
  ctx.state.user_id = decoded.data.id;
  await next();
};
