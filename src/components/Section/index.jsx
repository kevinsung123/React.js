import * as React from 'react'

import {AsideBar} from './AsideBar'
import {Content} from './Content'

export class Section extends React.Component {
    render() {
        return (
            <div id="section">
                <AsideBar />
                <Content />
            </div> 
        )
    }
}