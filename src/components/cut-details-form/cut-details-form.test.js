import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

test('allows a user to enter the cut details', () => {
    const component = render(<App />);
    const label = 'Board Length';

    expect(component.getByTestId('cut-details-form')).toBeTruthy();
    expect(component.getByTestId(label)).toHaveTextContent(label);
    expect(component.getByPlaceholderText(label));
});
