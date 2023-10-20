import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';
import { createBrowserHistory } from 'history'

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({ productionPrefix: 'co' });

const history = createBrowserHistory();

export default () => {

  const [isSignedId, setIsSignedId] = useState(false);

  useEffect(() => {
    if (isSignedId) {
      history.push('/dashboard');
    }
  }, [isSignedId])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName} >
        <div>
          <Header isSignedId={isSignedId} onSignOut={() => setIsSignedId(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedId(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedId && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
}