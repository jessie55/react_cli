const path = require('path');
const ROOT = path.resolve(__dirname, '..');

String.prototype.join = function (target) {
  return path.join(this.toString(), target);
};

const pathConfig = {
  ROOT: ROOT,
  NODE_MODULES_PATH: ROOT.join('node_modules'),
  SRC_PATH: ROOT.join('src'),
  DIST_PATH: ROOT.join('dist')
};
module.exports = pathConfig;
