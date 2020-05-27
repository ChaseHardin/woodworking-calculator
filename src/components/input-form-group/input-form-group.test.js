import React from 'react';
import { render } from '@testing-library/react';
import { InputFormGroup } from './input-form-group'
import chance from '../../../test-utils/chance-wrapper';
import renderer from 'react-test-renderer';

let props;

beforeEach(() => {
    props = {
        label: chance.string(),
        placeholder: chance.string()
    };
});

test('renders form group with label and input', () => {
    const component = render(<InputFormGroup {...props} />);

    expect(component.getByTestId(props.label)).toHaveTextContent(props.label);
    expect(component.getByPlaceholderText(props.placeholder))
});

test('renders form group with input', () => {
    const component = render(<InputFormGroup placeholder={props.placeholder} />);

    expect(component.queryByTestId(props.label)).toBeNull();
    expect(component.getByPlaceholderText(props.placeholder))
});

test('renders snapshot of form group', () => {
    const tree = renderer.create(<InputFormGroup />).toJSON();

    expect(tree).toMatchSnapshot();
});