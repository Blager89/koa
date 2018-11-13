const homeRouter = require('./home');
const { signupRouter } = require('./auth');

module.exports = app => {
  // error heandler

  app.use(homeRouter);
  app.use(signupRouter);
};
