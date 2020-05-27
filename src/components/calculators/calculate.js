export const calculate = ({boardLength, numberOfCuts, bladeWidth}) => {
    const totalBladeWaste = numberOfCuts * bladeWidth;
    const boardAfterBladeWaste = boardLength - totalBladeWaste;

    return boardAfterBladeWaste / numberOfCuts;
}