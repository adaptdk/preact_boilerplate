import { h } from 'preact';
import { renderRoutes } from 'react-router-config';

const AppRoot = (props: Object) => renderRoutes(props.route.routes);

export default AppRoot;