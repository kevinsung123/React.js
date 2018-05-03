import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './app.sass'

const history = createBrowserHistory();

ReactDOM.render(

    <Router history={history}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>
    </Router>,
  document.getElementById('react-app')
);
registerServiceWorker();
    