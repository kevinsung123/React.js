import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'


import App from './App';
import registerServiceWorker from './registerServiceWorker';


const history = createBrowserHistory();

ReactDOM.render(

    <Router history={history}>
      <App />
    </Router>,
  document.getElementById('react-app')
);
registerServiceWorker();
    