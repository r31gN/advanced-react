import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './Redux/Store';
import './index.css';
import App from './App';
import About from './About';
import NotFound from './NotFound';
import { registerObserver } from 'react-perf-devtool';
registerObserver();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  </Provider>,
  document.getElementById('root')
);
