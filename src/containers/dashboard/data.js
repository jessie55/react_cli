export const dashboards = [{
  name: '第一个看板',
  key: '123456abc',
  layouts: {
    'lg': [{
      'w': 2,
      'h': 2,
      'x': 0,
      'y': 0,
      'i': 'key1',
      'minW': 1,
      'minH': 1,
      'moved': false,
      'static': false
    }, {
      'w': 1,
      'h': 1,
      'x': 2,
      'y': 0,
      'i': 'key2',
      'minW': 1,
      'minH': 1,
      'moved': false,
      'static': false
    }]
  }
}, {
  name: '第二个看板',
  key: 'abcdefg',
  layouts: {
    'lg': [{
      'w': 2,
      'h': 2,
      'x': 0,
      'y': 0,
      'i': 'key2-1',
      'minW': 1,
      'minH': 1,
      'moved': false,
      'static': false
    }]
  }
}];

export const contents = [{
  cid: 'key1',
  type: 'CARD1'
}, {
  name: 'name2',
  cid: 'key2',
  type: 'CARD2'
}];
