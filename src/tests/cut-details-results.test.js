import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import TestHelpers from '../../test-utils/helpers';

test('should not show results table until a user provides cut details', () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId('cut-results')).toBeNull();
});

test('allow a user to move foward in cut details when clicking Next', () => {
    const { queryByTestId, getByText, queryByText } = render(<App />);
    
    expect(queryByText('How wide is your saw blade?')).toBeNull();
    
    const boardLengthFt = TestHelpers.makeNumber(0, 20);
    TestHelpers.changeInput(queryByTestId('selector-input-board-ft'), boardLengthFt);
    
    fireEvent.click(getByText('Next'));

    expect(queryByTestId('cut-details-form')).toBeNull();
    expect(queryByTestId('cut-results')).toBeTruthy();
    expect(queryByText('How wide is your saw blade?')).toBeTruthy();
});
