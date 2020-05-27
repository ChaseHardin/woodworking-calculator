import React from 'react';
import { calculate } from '../../utils/calculators/calculate';
import { CutDetailsContext } from '../../contexts/cut-details-context';

export const Results = () => {
    const { cutDetails } = React.useContext(CutDetailsContext);

    const showCutDetails = cutDetails.boardLength && cutDetails.numberOfCuts && cutDetails.bladeWidth;

    return (
        <div data-testid={'results'} className={'results'}>
            {showCutDetails && calculate(cutDetails)}
        </div>
    )
}