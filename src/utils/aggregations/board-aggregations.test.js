import { aggregateBoard } from './board-aggregations';

test('should set board length when given feet', () => {
    const feet = '20';

    const actual = aggregateBoard(feet, undefined, undefined);

    expect(actual).toEqual(`${feet}' `);
});

test('should set board length when given inch', () => {
    const inch = '4';

    const actual = aggregateBoard(undefined, inch, undefined);

    expect(actual).toEqual(`${inch}"`)
});

test('should set board length when given fraction', () => {
    const fraction = '1/2';

    const actual = aggregateBoard(undefined, undefined, fraction);

    expect(actual).toEqual(`${fraction}"`);
});

test('should handle board length when given feet, inch, and fraction', () => {
    const feet = '20';
    const inch = '4';
    const fraction = '1/2';

    const actual = aggregateBoard(feet, inch, fraction);

    expect(actual).toEqual(`${feet}' ${inch} ${fraction}"`);
});