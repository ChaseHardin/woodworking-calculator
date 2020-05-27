import React from 'react';
import Form from 'react-bootstrap/Form';

export const InputFormGroup = ({label, placeholder}) => {
    return (
        <Form.Group>
            {label && <Form.Label className='form-label' data-testid={label}>{label}</Form.Label>}
            <Form.Control placeholder={placeholder}></Form.Control>
        </Form.Group>
    );
}