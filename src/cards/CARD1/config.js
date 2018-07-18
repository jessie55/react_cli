const name = 'CARD1';
const componentType = name;

export default {
  name,
  componentType,
  headConfig: {
    hideHead: true
  },
  filters: [{
    type: 'input',
    name: '输入框',
    param: 'value'
  }, {
    type: 'input',
    name: '输入框2',
    param: 'value2'
  }]
};
