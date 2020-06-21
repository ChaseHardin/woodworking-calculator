import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import TestHelpers from '../../test-utils/helpers';

afterEach(cleanup);

test('should make form with correct text', () => {
    const { getByTestId, getByText } = render(<App />);
    
    expect(getByTestId('cut-details-form')).toBeTruthy();
    expect(getByText('What is the length of the board?'));
    expect(getByText('ft'));
    expect(getByText('Select feet'));

    expect(getByText('in'));
    expect(getByText('Select inches'));

    expect(getByText('fr'));
    expect(getByText('Select fraction of an inch'))
});

test('allows a user to submit board length', async () => {
    const { getByTestId } = render(<App />);

    const boardLengthFt = TestHelpers.makeNumber(0, 20);
    TestHelpers.changeInput(getByTestId('selector-input-board-ft'), boardLengthFt);

    const boardLengthIn = TestHelpers.makeNumber(0, 12);
    TestHelpers.changeInput(getByTestId('selector-input-board-in'), boardLengthIn);

    const boardLengthFr = '1/2';
    TestHelpers.changeInput(getByTestId('selector-input-board-fr'), boardLengthFr);

    expect(getByTestId('cut-results')).toHaveTextContent('Board Length');
    expect(getByTestId('cut-results')).toHaveTextContent(
        `${boardLengthFt}' ${boardLengthIn} 1/2"`
    );
});

test('allow a user to see results when board is only feet long', () => {
    const { getByTestId } = render(<App />);

    const boardLengthFt = TestHelpers.makeNumber(0, 20);
    TestHelpers.changeInput(getByTestId('selector-input-board-ft'), boardLengthFt);

    expect(getByTestId('cut-results')).toHaveTextContent('Board Length');
    expect(getByTestId('cut-results')).toHaveTextContent(`${boardLengthFt}'`);
});

test('allow a user to see results when board is only inches long', () => {
    const { getByTestId } = render(<App />);

    const boardLengthIn = TestHelpers.makeNumber(0, 12);
    TestHelpers.changeInput(getByTestId('selector-input-board-in'), boardLengthIn);

    expect(getByTestId('cut-results')).toHaveTextContent('Board Length');
    expect(getByTestId('cut-results')).toHaveTextContent(`${boardLengthIn}"`);
});

test('allow a user to see results when board is only fractions long', () => {
    const { getByTestId } = render(<App />);

    const boardLengthFr = '1/2';
    TestHelpers.changeInput(getByTestId('selector-input-board-fr'), boardLengthFr);

    expect(getByTestId('cut-results')).toHaveTextContent('Board Length');
    expect(getByTestId('cut-results')).toHaveTextContent(`${boardLengthFr}"`);
});
