import Mock from 'mockjs';
import FetchMock from 'fetch-mock';

/**
 * 目前没有考虑头部信息等返回消息，如有需求可以修改此函数。
 * 如定义respose属性并优先于responseData读取
 * @param {string} url  mock api url
 * @param {string} method  'POST' 'GET' ...
 * @param {string} responseData json data
 * @param {string} msg - default ok
 */
export const registerMock = ({
  url,
  method,
  responseData,
  msg = 'ok'
}) => {
  const response = Mock.mock({
    data: responseData || {},
    msg
  });
  switch (method) {
    case 'GET':
    case 'get':
      FetchMock.get(url, response);
      break;
    case 'POST':
    case 'post':
      FetchMock.post(url, response);
      break;
    default:
      FetchMock.mock(url, response);
      break;
  }
};

export const registerMocks = (allMocks) => {
  allMocks.filter(mockItem => mockItem.active)
    .forEach(mockItem => { registerMock(mockItem); });

  // 没有匹配上的路由将会调用原本的fetch方法
  FetchMock.spy();
};
