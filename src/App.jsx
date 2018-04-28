import * as React from 'react'
import {BrowserRouter} from 'react-router-dom'

import {Header, Section} from './components'

class App extends React.Component {
  render() {
      return (
        <div id="main_wrapper" >
          <Header />
          <Section />
        </div>
      );
  }
}

export default App;
