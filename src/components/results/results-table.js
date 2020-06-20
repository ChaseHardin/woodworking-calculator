import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export const ResultsTable = props => {
    const renderTableDetails = () => {
        return Object.values(props.cutDetails).map((value) => {
            return (
                <tr key={value}>
                    <td>{value.label}</td>
                    <td>{value.value}</td>
                </tr>
            );
        });
    };

    return (
        <div data-testid={'cut-results'}>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>Label</th>
                        <th>Value</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {renderTableDetails()}
                </MDBTableBody>
            </MDBTable>
        </div>
    );
};
