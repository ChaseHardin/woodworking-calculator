import { feet, inches, fractions } from './measurements';

test('should return 0 to 20 feet', () => {
    expect(feet).toEqual([
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
    ]);
});

test('should return 0 to 12 inches', () => {
    expect(inches).toEqual([
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
    ]);
});

test('should return tape measure fractions', () => {
    expect(fractions).toEqual([
        '0',
        '1/16',
        '1/8',
        '3/16',
        '1/4',
        '5/16',
        '3/8',
        '7/16',
        '1/2',
        '9/16',
        '5/8',
        '11/16',
        '3/4',
        '13/16',
        '7/8',
        '15/16',
        '1'
    ]);
});