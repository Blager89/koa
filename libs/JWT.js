const jsonwebtoken = require('jsonwebtoken');
const { cloneDeep } = require('lodash');

const payload = {
  data: {},
  exp: Math.floor(Date.now() / 1000) + 86400 * 60
};

const JWT = {
  signUser: userModel => {
    const userPayload = cloneDeep(payload);
    userPayload.data = {
      id: userModel.get('id')
    };
    return jsonwebtoken.sign(userPayload, process.env.SECRET);
  },
  verifyToken: token => new Promise((res, rej) => {
    jsonwebtoken.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        rej(new Error('Authentication failed', 401));
      } else {
        res(decoded);
      }
    });
  })
};

module.exports = JWT;
