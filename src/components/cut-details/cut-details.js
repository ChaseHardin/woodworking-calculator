import React from 'react';
import Form from 'react-bootstrap/Form';
import './cut-details.css'
import { CutDetailsContext } from '../../contexts/cut-details-context';
import { ItemSelector } from '../item-selector/item-selector';
import { feet } from '../../utils/feet';

export const CutDetails = () => {
    const { cutDetails } = React.useContext(CutDetailsContext);

    const styleLabel = {
        marginBottom: '2rem'
    };

    return (
        <Form data-testid={'cut-details-form'}>
            <h4 style={styleLabel}>What is the length of the board?</h4>

            <ItemSelector
                measurementType={'ft'}
                detailType={'boardLengthFt'}
                options={feet}
            />

            <div data-testid={'cut-results'}>
                {cutDetails.boardLengthFt}
            </div>
        </Form>
    )
};
