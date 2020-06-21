import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import TestHelpers from '../../test-utils/helpers';

afterEach(cleanup);

test('allows a user to fill provide blade width and desired board count', () => {
    const { getByText, getByTestId } = render(<App />);

    const boardLengthFt = TestHelpers.makeNumber(0, 20);
    TestHelpers.changeInput(getByTestId('selector-input-board-ft'), boardLengthFt);

    fireEvent.click(getByText('Next'));

    expect(getByText('How wide is your saw blade?'));

    const bladeWidth = '.125';

    const bladeInput = getByTestId('blade-input');
    TestHelpers.changeInput(bladeInput, bladeWidth);

    expect(getByTestId('cut-results')).toHaveTextContent('Blade Width');
    expect(getByTestId('cut-results')).toHaveTextContent(`${bladeWidth}`);
});

test('allows a user to go back to board length view', () => {
    const { getByText } = render(<App />);
    
    fireEvent.click(getByText('Next'));
    expect(getByText('How wide is your saw blade?'));

    fireEvent.click(getByText('Back'));

    expect(getByText('What is the length of the board?'));
});