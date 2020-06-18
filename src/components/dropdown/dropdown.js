import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default ({label, options}) => {
    const renderOptions = () => {
        return options.map((option, index) => <Dropdown.Item key={index}>{option}</Dropdown.Item>)
    }

    return (
        <Dropdown>
            <Dropdown.Toggle>
                {label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {renderOptions()}
            </Dropdown.Menu>
        </Dropdown>
    )
}
