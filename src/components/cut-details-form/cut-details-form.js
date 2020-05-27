import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { InputFormGroup } from '../input-form-group/input-form-group';
import './cut-details-form.css';
import {calculate} from '../calculators/calculate';

export const CutDetailsForm = () => {
    const [details, setDetails] = useState({});

    const handleBoardLength = React.useCallback((e) => handleOnChange(e, 'boardLength'));
    const handleNumberOfCuts = React.useCallback((e) => handleOnChange(e, 'numberOfCuts'));
    const handleBladeWidth = React.useCallback((e) => handleOnChange(e, 'bladeWidth'));

    const handleOnChange = (e, name) => {
        setDetails({
            ...details,
            [name]: e.target.value
        });
    };

    const showCutDetails = details && details.boardLength && details.numberOfCuts && details.bladeWidth;

    return (
        <React.Fragment>
            <div data-testid={'results'}>
                {showCutDetails && <span>{calculate(details)}</span>}
            </div>
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
        </React.Fragment>
    )
}