import React from 'react';
import Form from 'react-bootstrap/Form';
import { InputFormGroup } from '../input-form-group/input-form-group';
import './cut-details-form.css';

export const CutDetailsForm = () => {
    return (
        <Form data-testid={'cut-details-form'}>
            <InputFormGroup label='Length of Board' placeholder='Length of board before cutting' />
            <InputFormGroup label='Boards' placeholder='Number of boards after cutting' />
            <InputFormGroup label='Blade Width' placeholder='Width of blade' />
        </Form>
    )
}