import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

test('allows a user to enter the cut details', () => {
    const component = render(<App />);

    expect(component.getByTestId('cut-details-form')).toBeTruthy();

    const boardLengthLabel = 'Length of Board';
    expect(component.getByTestId(boardLengthLabel)).toHaveTextContent(boardLengthLabel);
    expect(component.getByPlaceholderText('Length of board before cutting'));

    const numberOfCutsLabel = 'Boards'
    expect(component.getByTestId(numberOfCutsLabel)).toHaveTextContent(numberOfCutsLabel);
    expect(component.getByPlaceholderText('Number of boards after cutting'));

    const bladeWidthLabel = 'Blade Width';
    expect(component.getByTestId(bladeWidthLabel)).toHaveTextContent(bladeWidthLabel);
    expect(component.getByPlaceholderText('Width of blade'));
});
