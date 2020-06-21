import React from 'react';
import Form from 'react-bootstrap/Form';
import Styles from '../../styles';
import { MDBInput } from 'mdbreact';
import { CutDetailsContext } from '../../contexts/cut-details-context';

export const CutView = () => {
    const { cutDetails, setCutDetails } = React.useContext(CutDetailsContext);

    const handleBladeChange = (event) => {
        setCutDetails({
            ...cutDetails,
            bladeWidth: {
                value: event.target.value,
                label: 'Blade Width'
            }
        })
    }

    return (
        <Form>
            <h4 style={Styles.label}>How wide is your saw blade?</h4>
            <MDBInput
                data-testid={'blade-input'}
                label={'Blade width'}
                onChange={handleBladeChange}
            />
        </Form>
    );
}