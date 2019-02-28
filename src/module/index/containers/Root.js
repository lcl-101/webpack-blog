var Root = '';

if (process.env.NODE_ENV === `development`){
  Root = require('./rootDev/devRoot');
}else {
  Root = require('./rootPro/Root');
}

module.exports = Root;
