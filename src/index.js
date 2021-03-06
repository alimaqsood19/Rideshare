import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Rideshare = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider>
        {/* <Provider store={store}> */}
        <Switch>
          <Route exact path="/" component={'hello'} />
        </Switch>
        {/* </Provider> */}
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Rideshare />, document.getElementById('root'));
registerServiceWorker();
