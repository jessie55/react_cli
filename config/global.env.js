const dotenv = require('dotenv');
const { readFileSync } = require('fs');
const envBefore = dotenv.parse(readFileSync('.env'));
const _ = require('lodash');

const transferEnv = obj => {
  _.each(obj, (v, i) => {
    if (_.isString(v)) {
      obj[i] = JSON.stringify(v);
    } else if (_.isObject(v) && !_.isFunction(v)) {
      transferEnv(v);
    }
  });
  return obj;
};
module.exports = transferEnv(envBefore);
