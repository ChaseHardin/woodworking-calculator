import React from 'react';
import Form from 'react-bootstrap/Form';
import { InputFormGroup } from '../input-form-group/input-form-group';

export const CutDetailsForm = () => {
    return (
        <Form data-testid={'cut-details-form'}>
            <InputFormGroup label='Board Length' placeholder='Board Length' />
        </Form>
    )
}