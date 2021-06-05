import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '../../Routes/routes';

const Router = () => {
  console.log(routes);
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {routes.map(({ id, exact, path, component }) => (
            <Route key={id} exact={exact} path={path} component={component} />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Router;
