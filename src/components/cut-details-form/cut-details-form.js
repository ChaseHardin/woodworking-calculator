import React from 'react';
import Form from 'react-bootstrap/Form';
import { InputFormGroup } from '../input-form-group/input-form-group';
import {calculate} from '../calculators/calculate';
import './cut-details-form.css'
import { CutDetailsContext } from '../../contexts/cut-details-context';

export const CutDetailsForm = () => {
    const {cutDetails, setCutDetails} = React.useContext(CutDetailsContext);

    const handleBoardLength = event => handleOnChange(event, 'boardLength');
    const handleNumberOfCuts = event => handleOnChange(event, 'numberOfCuts');
    const handleBladeWidth = event => handleOnChange(event, 'bladeWidth');

    const handleOnChange = (event, name) => {
        setCutDetails({
            ...cutDetails,
            [name]: event.target.value
        });
    };

    const showCutDetails = cutDetails.boardLength && cutDetails.numberOfCuts && cutDetails.bladeWidth;

    return (
        <React.Fragment>
            <Form data-testid={'cut-details-form'}>
                <InputFormGroup 
                    label='Length of Board' 
                    placeholder='Length of board before cutting' 
                    onChange={handleBoardLength}
                />
                <InputFormGroup 
                    label='Boards' 
                    placeholder='Number of boards after cutting' 
                    onChange={handleNumberOfCuts}
                    />
                <InputFormGroup 
                    label='Blade Width' 
                    placeholder='Width of blade' 
                    onChange={handleBladeWidth}
                    />
            </Form>
            <div data-testid={'results'} className={'results'}>
                {showCutDetails && calculate(cutDetails)}
            </div>
        </React.Fragment>
    )
}