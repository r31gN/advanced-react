import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './Components/Loading';
import store from './Redux/Store';
import './Css/index.css';

const LazyApp = lazy(() => import('./Components/App'));
const LazyAbout = lazy(() => import('./Components/About'));
const LazyNotFound = lazy(() => import('./Components/NotFound'));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Suspense fallback={<Loading />}>
                <LazyApp />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/about"
            render={() => (
              <Suspense fallback={<Loading />}>
                <LazyAbout />
              </Suspense>
            )}
          />
          <Route
            render={() => (
              <Suspense fallback={<Loading />}>
                <LazyNotFound />
              </Suspense>
            )}
          />
        </Switch>
      </main>
    </Router>
  </Provider>,
  document.getElementById('root')
);
