import React from 'react';
import Form from 'react-bootstrap/Form';
import { InputFormGroup } from '../input-form-group/input-form-group';
import './cut-details.css'
import { CutDetailsContext } from '../../contexts/cut-details-context';
import { Results } from '../results/results';
import Dropdown from '../dropdown/dropdown';

export const CutDetails = () => {
    const { cutDetails, setCutDetails } = React.useContext(CutDetailsContext);

    const handleBoardLength = event => handleOnChange(event, 'boardLength');
    const handleNumberOfCuts = event => handleOnChange(event, 'numberOfCuts');
    const handleBladeWidth = event => handleOnChange(event, 'bladeWidth');

    const handleOnChange = (event, name) => {
        setCutDetails({
            ...cutDetails,
            [name]: event.target.value
        });
    };

    return (
        <React.Fragment>
            <Form data-testid={'cut-details-form'}>
                <Dropdown 
                    label={'Inches'}
                    options={['1/2', '3/4']}
                />
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
            <Results />
        </React.Fragment>
    )
}