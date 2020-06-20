import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../../App';
import chance from '../../../test-utils/chance-wrapper';

afterEach(cleanup);

test('allows a user to enter cut details', async () => {
    const { getByTestId, getByText } = render(<App />);

    expect(getByTestId('cut-details-form')).toBeTruthy();
    expect(getByText('What is the length of the board?'));
    expect(getByText('ft'));
    expect(getByText('Select feet'));
    
    expect(getByText('in'));
    expect(getByText('Select inches'));

    const boardLengthFt = makeNumber(0, 20);
    changeInput(getByTestId('selector-input-board-ft'), boardLengthFt);

    const boardLengthIn = makeNumber(0, 12);
    changeInput(getByTestId('selector-input-board-in'), boardLengthIn);

    expect(getByTestId('cut-results')).toHaveTextContent('Board Length');
    expect(getByTestId('cut-results')).toHaveTextContent(`${boardLengthFt}' ${boardLengthIn}"`);
});

test('should not show results table until a user provides cut details', () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId('cut-results')).toBeNull();
});

const makeNumber = (min, max) => chance.natural({ min, max });
const changeInput = (input, value) => fireEvent.change(input, { target: { value } });
