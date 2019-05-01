import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import store, { history } from '../utils/configureStore';

const AppContainer = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={() => <div>CLIENT IS RUNNING</div>} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default AppContainer;
