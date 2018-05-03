import * as React from 'react'
import {Switch, Route} from 'react-router-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {MainPage} from '/pages/MainPage';
import {PatientSearchPage} from '/pages/PatientSearchPage'
import {PatientSearchList, PatientsDetail, PatientSearchTable} from './Patients';
//import {PatientSearchTable} from './Patients/PatientSearchTable';

export class Content extends React.Component {
    render() {
        return (
            <div id="content">
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/patients/search" component={PatientSearchPage}/>
                    <Route exact path="/patients/add" component={PatientsDetail} />

                </Switch>
                </MuiThemeProvider>
            </div>
        )
    }
}