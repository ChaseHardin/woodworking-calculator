export const calculate = ({boardLength, numberOfCuts, bladeWidth}) => {
    const bladeWaste = numberOfCuts * bladeWidth;
    const boardAfterBladeWaste = boardLength - bladeWaste;

    return boardAfterBladeWaste / numberOfCuts;
}