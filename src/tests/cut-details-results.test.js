import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import chance from '../../test-utils/chance-wrapper';

test('should not show results table until a user provides cut details', () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId('cut-results')).toBeNull();
});

test('allow a user to move foward in cut details when clicking Next', () => {
    const { queryByTestId, getByText } = render(<App />);

    const boardLengthFt = makeNumber(0, 20);
    changeInput(queryByTestId('selector-input-board-ft'), boardLengthFt);
    
    fireEvent.click(getByText('Next'));

    expect(queryByTestId('cut-details-form')).toBeNull();
    expect(queryByTestId('cut-results')).toBeTruthy();
});

const makeNumber = (min, max) => chance.natural({ min, max });
const changeInput = (input, value) => fireEvent.change(input, { target: { value } });