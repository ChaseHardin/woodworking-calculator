import React from 'react';
import { MDBInputGroup } from 'mdbreact';
import { CutDetailsContext } from '../../contexts/cut-details-context';

export const ItemSelector = props => {
    const { cutDetails, setCutDetails } = React.useContext(CutDetailsContext);

    const handleChange = (event) => {
        setCutDetails({
            ...cutDetails,
            [props.type]: {
                ...props.item,
                [props.measurement]: event.target.value
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
                    data-testid={`selector-input-${props.type}-${props.measurement}`}
                    className="browser-default custom-select"
                    onChange={handleChange}>
                    <option>{props.optionLabel}</option>
                    {renderOptions()}
                </select>
            }
        />
    )
}