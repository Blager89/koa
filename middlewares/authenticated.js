const { validate } = require('./../libs');

module.exports = async (ctx, next) => {
  await validate(ctx.header, {
    authorization: 'required|regex:/^Bearer\\s{1}([A-z\\.0-9-]+)$/'
  });
  await next();
};
