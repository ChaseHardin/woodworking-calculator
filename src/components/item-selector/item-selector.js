import React from 'react';
import { MDBInputGroup } from 'mdbreact';
import { CutDetailsContext } from '../../contexts/cut-details-context';

export const ItemSelector = props => {
    const { setCutDetails } = React.useContext(CutDetailsContext);

    const handleChange = (event) => {
        setCutDetails({
            [props.type]: {
                label: props.itemDetails.label,
                value: parseInt(event.target.value)
            }
        });
    }

    const renderOptions = () => {
        return props.options.map(option => {
            return <option key={option}>{option}</option>
        });
    };

    return (
        <MDBInputGroup
            containerClassName="mb-3"
            append={props.measurement}
            inputs={
                <select
                    data-testid={'item-selector-input'}
                    className="browser-default custom-select"
                    onChange={handleChange}>
                    <option>Select feet</option>
                    {renderOptions()}
                </select>
            }
        />
    )
}