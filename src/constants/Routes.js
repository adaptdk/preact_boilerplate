import App from '../containers/App/App';
import AppRoot from '../components/Routes/AppRoot';
import NotFound from '../components/Routes/NotFound';
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
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
];

export default routes;