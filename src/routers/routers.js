export const index = [
  {
    path: '/',
    exact: true,
    component: import('../containers/index')
  }
];

export const dashboard = [
  {
    path: '/dashboard',
    exact: true,
    component: import('../containers/dashboard')
  },
  {
    path: '/dashboard/:id',
    exact: true,
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
    component: import('../containers/charts')
  }
];

