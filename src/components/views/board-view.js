import React from 'react';
import Form from 'react-bootstrap/Form';
import { ItemSelector } from '../item-selector/item-selector';
import { feet, inches, fractions } from '../../utils/measurements';
import { CutDetailsContext } from '../../contexts/cut-details-context';
import Styles from '../../styles';

export const BoardView = () => {
    const { cutDetails } = React.useContext(CutDetailsContext);
    
    return (
        <Form data-testid={'cut-details-form'}>
            <h4 style={Styles.label}>What is the length of the board?</h4>

            <ItemSelector
                measurement={'ft'}
                type={'board'}
                item={cutDetails.board}
                options={feet}
                optionLabel={'Select feet'}
            />

            <ItemSelector
                measurement={'in'}
                type={'board'}
                item={cutDetails.board}
                options={inches}
                optionLabel={'Select inches'}
            />

            <ItemSelector
                measurement={'fr'}
                type={'board'}
                item={cutDetails.board}
                options={fractions}
                optionLabel={'Select fraction of an inch'}
            />
        </Form>
    )
};
