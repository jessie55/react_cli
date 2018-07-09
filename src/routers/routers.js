export const index = [
  {
    path: '/',
    exact: true,
    menu: true,
    component: import('../containers/index')
  }
];

export const dashboard = [
  {
    path: '/dashboard',
    exact: true,
    menu: true,
    component: import('../containers/dashboard')
  },
  {
    path: '/dashboard/:key',
    exact: true,
    menu: true,
    component: import('../containers/dashboard')
  }
];

export const mock = [
  {
    path: '/mock',
    exact: true,
    component: import('../containers/mock')
  }
];

export const charts = [
  {
    path: '/charts',
    exact: true,
    menu: true,
    component: import('../containers/charts')
  }
];

export cards from 'cards/routers';
