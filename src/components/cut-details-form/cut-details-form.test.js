import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../../App';

afterEach(cleanup);

test('allows a user to enter the cut details', () => {
    const {getByTestId, getByPlaceholderText} = setup();

    expect(getByTestId('cut-details-form')).toBeTruthy();

    const boardLengthLabel = 'Length of Board';
    expect(getByTestId(boardLengthLabel)).toHaveTextContent(boardLengthLabel);
    expect(getByPlaceholderText('Length of board before cutting'));

    const numberOfCutsLabel = 'Boards'
    expect(getByTestId(numberOfCutsLabel)).toHaveTextContent(numberOfCutsLabel);
    expect(getByPlaceholderText('Number of boards after cutting'));

    const bladeWidthLabel = 'Blade Width';
    expect(getByTestId(bladeWidthLabel)).toHaveTextContent(bladeWidthLabel);
    expect(getByPlaceholderText('Width of blade'));
});

test('should render the cut details', () => {
    const {getByTestId, getByPlaceholderText} = setup();
    
    const input = getByPlaceholderText('Length of board before cutting');

    fireEvent.change(input, { target: { value: '26' } });
    
    expect(input.value).toBe('26');
    expect(getByTestId('results')).toHaveTextContent('26');
});

const setup = () => {
    const utils = render(<App />);

    return {
        ...utils
    }
}
