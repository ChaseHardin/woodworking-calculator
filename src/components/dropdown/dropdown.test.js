import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Dropdown from './dropdown';
import chance from '../../../test-utils/chance-wrapper';

test('should handle open and close state', async () => {
    const expectedLabel = chance.string();
    const expectedOptions = [chance.string(), chance.string()];

    const { getByText, queryByText } = render(
        <Dropdown
            label={expectedLabel}
            options={expectedOptions}
        />
    );

    expectedOptions.forEach(option => expect(queryByText(option)).toBeNull())

    fireEvent.click(getByText(expectedLabel))

    await waitForElement(() => getByText(expectedOptions[0]));
    await waitForElement(() => getByText(expectedOptions[1]));
});
