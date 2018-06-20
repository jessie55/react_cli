export const home = [
  {
    path: 'home',
    exact: true,
    component: import('../components/Home')
  },
  {
    path: 'home/detail/:id',
    exact: true,
    component: import('../components/Detail')
  }
];

export const home2 = [
  {
    path: 'home',
    exact: true,
    component: import('../components/Home')
  },
  {
    path: 'home/detail/:id',
    exact: true,
    component: import('../components/Detail')
  }
];
