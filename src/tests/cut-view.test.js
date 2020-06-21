import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import TestHelpers from '../../test-utils/helpers';

afterEach(cleanup);

test('allows a user to fill provide blade width and desired board count', () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText('Next'));

    expect(getByText('How wide is your saw blade?'));

});