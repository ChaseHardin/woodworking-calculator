export const aggregateBoard = (feet, inch, fraction) => {
    let boardLength = '';

    if (feet) {
        boardLength = boardLength.concat(`${feet}' `);
    }

    if (inch && fraction) {
        boardLength = boardLength.concat(`${inch} ${fraction}"`)
    } else if (inch) {
        boardLength = boardLength.concat(`${inch}"`);
    } else if (fraction) {
        boardLength = boardLength.concat(`${fraction}"`)
    }

    return boardLength;
}