import { fireEvent } from '@testing-library/react';
import chance from '../test-utils/chance-wrapper';

const changeInput = (input, value) => fireEvent.change(input, { target: { value } });
const makeNumber = (min, max) => chance.natural({ min, max });

module.exports = {
    changeInput,
    makeNumber
}