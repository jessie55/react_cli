/*
 *  代理配置更改后，需要重启服务器才能生效
 * local： 本地数据
 * proxy： 代理
 * mock：  mock数据
 */

// local:本地数据|proxy:代理数据请求(代理服务会默认启动)

function getTarget(env) {
  let target = '';
  if (env === 'local') {
    target = '/';
  }
  if (env === 'mock') {
    target = '';
  }
  if (env === 'proxy') {
    target = '';
  }
  return target;
}

module.exports = {
  env: 'proxy',
  proxy: [
    {
      context: [],
      target: getTarget('proxy'),
      withCredentials: true,
      secure: false,
      changeOrigin: true
    }
  ]
};
