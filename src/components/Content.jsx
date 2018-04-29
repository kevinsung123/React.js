import * as React from 'react'
import {Switch, Route} from 'react-router-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {MainPage} from './MainPage'
import {PatientsList, PatientsDetail, PatientsCreate} from './Patients'

export class Content extends React.Component {
    render() {
        return (
            <div id="content">
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    
                <Switch>
                    <Route exact path="/" component={MainPage} />

                    <Route exact path="/patients" component={PatientsList}/>
                    <Route path="/patients/detail" component={PatientsDetail} />

                </Switch>
                </MuiThemeProvider>
            </div>
        )
    }
}