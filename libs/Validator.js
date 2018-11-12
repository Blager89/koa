const Validator = require('validatorjs');

module.exports = (input, rules, messages = []) => new Promise((res, rej) => {
  const validator = new Validator(input, rules, messages);
  validator.passes(res);
  validator.fails(() => {
    rej(new Error(validator.errors));
  });
});