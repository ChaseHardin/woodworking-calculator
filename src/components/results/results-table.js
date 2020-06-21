import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export const ResultsTable = props => {
    const renderTableDetails = () => {
        return Object.entries(props.cutDetails).map(([key, value]) => {
            if (key === 'board') {
                return (
                    <tr key={key}>
                        <td>{value.label}</td>
                        <td>{value.value(value.ft, value.in, value.fr)}</td>
                    </tr>
                );
            }

            return (
                <tr key={key}>
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
