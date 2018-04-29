import * as React from 'react'
import {BrowserRouter} from 'react-router-dom'

import {Header} from './Header'
import {AsideBar} from './AsideBar'
import {Content} from './Content'

class App extends React.Component {
  render() {
      return (
        <div id="main_wrapper" >
          <Header />
          <div id="section">
            <AsideBar />
            <Content />
          </div> 
        </div>
      );
  }
}

export default App;
