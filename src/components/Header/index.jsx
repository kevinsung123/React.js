import * as React from 'react';
import {NavLink,Link} from 'react-router-dom'
// import "./Header.sass"

export class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div id="left-header">
                    <NavLink to="/">MAIN</NavLink>
                </div>
                <div id="right-header">
                    <h1>IMSAFE</h1>
                </div>
            </div>
        );
    }
}
