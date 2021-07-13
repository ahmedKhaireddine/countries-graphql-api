import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Countries from './views/Countries';
import Country from './views/Country';

const routes = [
  {
    component: Countries,
    path: "/"
  },
  {
    component: Country,
    path: "/:id"
  }
]

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ component, path }) => {
            return <Route exact path={path} component={component}/>
        })}
      </Switch>
    </Router>
  );
}

export default Routes;