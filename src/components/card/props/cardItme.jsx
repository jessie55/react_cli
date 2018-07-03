const defaultValue = {
  name: '默认名称', // 卡片名称
  reducerPropKey: 0, // 在卡片组件中注册的来自reducer的数据位置, 0 表示直接...注入, undefined 表示以type字段注入
  dragable: false, // 是否允许拖动位置
  resizeable: false, // 是否允许更改大小
  closeable: false, // 是否允许删除
  setable: true, // 是否允许设置
  saveToRemote: true, // 是否保存卡片设置数据到远程
  static: false, // TODO 说明字段含义

  canConfig: true, // 是否可配置
  canDelete: true, // 是否可删除
  canMax: true, // 是否可最大化
  hideHeader: false, // 是否隐藏卡片头部
  hideSearch: false, // 是否隐藏搜索
  hideActions: false, // 是否隐藏操作

  minWidth: undefined, // 卡片最小宽度，可用于计算设置react-grid-layout的minW
  minHeight: undefined, // 同minWidth
  maxWidth: undefined, // 同minWidth
  maxHeight: undefined, // 同minWidth

  params: {}, // 卡片自定义参数，通常用于发请求的参数, 注意最好是单层结构
  data: {}, // 卡片自定义参数, 非请求参数的部分, 注意最好是单层结构

  customization: {
    renderTitle: undefined, // 自定义title呈现形式
    renderSearch: undefined, // 自定义search呈现形式
    renderHeader: undefined, // 自定义header呈现形式
    actions: [], // 自定义action
    detailLink: undefined // 自定义最大化的链接
  },

  customize: {} // 用于存储卡片个性化设置
};

export default defaultValue;
