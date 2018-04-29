import * as React from 'react'
import {Link} from 'react-router-dom'

export class AsideBar extends React.Component {
    render() {
        return (
            <div id="aside">
                <div className="submenu">

                </div>
                <div className="submenu">
                    <h2>PATIENT</h2>
                    <ul>
                        <li><Link to="/patients/search">Search</Link></li>
                        <li><Link to="/patients/add">Add</Link></li>
                    </ul>
                </div>
                <div className="submenu">
                    <h2>SCHEDULE</h2>
                    <ul>
                        <li><Link to="/schedules/search">Search</Link></li>
                        <li><Link to="/schedules/add">Add</Link></li>
                    </ul>
                </div>
                <div className="submenu">
                    <h2>TASK</h2>
                    <ul>
                        <li><Link to="/tasks/search">Search</Link></li>
                        <li><Link to="/tasks/add">Add</Link></li>
                    </ul>
                </div>
                <div className="submenu">
                    <h2>ATTRIBUTE</h2>
                    <ul>
                        <li><Link to="/attributes/search">Search</Link></li>
                        <li><Link to="/attributes/add">Add</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}