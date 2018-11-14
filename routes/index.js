const homeRouter = require('./home');
const { signupRouter, signinRouter } = require('./auth');

module.exports = app => {
  // error heandler

  app.use(homeRouter);
  app.use(signupRouter);
  app.use(signinRouter);
};
