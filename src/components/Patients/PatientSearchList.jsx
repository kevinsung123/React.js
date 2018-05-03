
import TableHeader from 'grommet/components/TableHeader';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export class PatientSearchList extends React.Component {
    render() {
        return (
            <div>
                <Paper style={style} zDepth={1} rounded={false} >
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    환자명
                                </th>
                                <th>
                                    생년월일
                                </th>
                                <th>
                                    성별
                                </th>
                                <th>
                                    연락처
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow>
                                <td> 1</td>
                                <td> Alan </td>
                                <td className='secondary'> plays accordion </td>
                            </TableRow>
                            <TableRow>
                                <td> 1</td>
                                <td> Alan </td>
                                <td className='secondary'> plays accordion </td>
                            </TableRow>
                            <TableRow>
                                <td> 1</td>
                                <td> Alan </td>
                                <td className='secondary'> plays accordion </td>
                            </TableRow>
                            <TableRow>
                                <td> 1</td>
                                <td> Alan </td>
                                <td className='secondary'> plays accordion </td>
                            </TableRow>
                        </tbody>
                    </Table>
                </Paper>
            </div>
        )
    }
}



export default PaperExampleRounded;

