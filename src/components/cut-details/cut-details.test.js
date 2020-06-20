import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../../App';

afterEach(cleanup);

test('allows a user to enter cut details', async () => {
    const { getByTestId, getByText } = render(<App />);

    expect(getByTestId('cut-details-form')).toBeTruthy();
    expect(getByText('What is the length of the board?'));
    expect(getByText('ft'));

    const expectedBoardLengthFt = '5';
    await fireEvent.change(getByTestId('item-selector-input'), {
        target: { value: expectedBoardLengthFt }
    });

    expect(getByTestId('cut-results')).toHaveTextContent('Board Length');
    expect(getByTestId('cut-results')).toHaveTextContent(expectedBoardLengthFt);
});

test('should not show results table until a user provides cut details', () => {
    const { queryByTestId} = render(<App />);

    expect(queryByTestId('cut-results')).toBeNull();
});
