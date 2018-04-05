import App from '../containers/App/App';
import AppRoot from '../components/Routes/AppRoot';
import Test from '../components/Test';

const routes = [
  {
    component: AppRoot,
    routes: [
      {
        path: '/',
        exact: true,
        component: App,
      },
      {
        path: '/home',
        component: Test,
      },
    ],
  },
];

export default routes;