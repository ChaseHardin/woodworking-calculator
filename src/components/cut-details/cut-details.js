import React from 'react';
import Form from 'react-bootstrap/Form';
import './cut-details.css'
import { CutDetailsContext } from '../../contexts/cut-details-context';
import { ItemSelector } from '../item-selector/item-selector';
import { feet } from '../../utils/feet';
import { ResultsTable } from '../results/results-table';

export const CutDetails = () => {
    const { cutDetails } = React.useContext(CutDetailsContext);

    const styleLabel = {
        marginBottom: '2rem'
    };

    return (
        <Form data-testid={'cut-details-form'}>
            <h4 style={styleLabel}>What is the length of the board?</h4>

            <ItemSelector
                measurement={'ft'}
                type={'board'}
                item={cutDetails.board}
                options={feet}
                optionLabel={'Select feet'}
            />

            {cutDetails.board.value && <ResultsTable cutDetails={cutDetails} />}
        </Form>
    )
};
