import { Switch } from 'react-router-dom';
import { SignIn } from '@pages/SignIn';
import { SignUp } from '@pages/SignUp';
import { Dashboard } from '@pages/Dashboard';
import { Favorites } from '@pages/Favorites';

import { Route } from './Route';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/sign-up" exact component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/favorites" component={Favorites} isPrivate />
  </Switch>
);
