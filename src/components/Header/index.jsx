import * as React from 'react';
import {NavLink,Link} from 'react-router-dom'
// import "./Header.sass"

export class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <h1><Link  to="/"> Moscato</Link></h1>
            </div>
        );
    }
}
