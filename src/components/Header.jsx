import * as React from 'react';
import {NavLink,Link} from 'react-router-dom'


export class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div id="left-header">
                    <NavLink to="/">MAIN</NavLink>
                </div>
                <div id="right-header">
                    <h1>IMSAFE 중앙보훈병원</h1>
                </div>
            </div>
        );
    }
}
