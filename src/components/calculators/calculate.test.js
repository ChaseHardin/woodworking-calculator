import {calculate} from './calculate';

test('calculate cut mark', () => {
    const props = {
        boardLength: 20.18,
        numberOfCuts: 2,
        bladeWidth: .09
    }

    const actual = calculate(props);

    expect(actual).toBe(10);
});