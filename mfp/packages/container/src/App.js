import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({ productionPrefix: 'co' })

export default () => {

  const [isSignedId, setIsSignedId] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName} >
        <div>
          <Header isSignedId={isSignedId} onSignOut={() => setIsSignedId(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedId(true)} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}