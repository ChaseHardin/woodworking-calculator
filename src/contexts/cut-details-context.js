import React from 'react';
import {aggregateBoard} from '../utils/aggregations/board-aggregations';

const DEFAULT_STATE = {
    board: {
        value: aggregateBoard,
        label: 'Board Length'
    }
};

export const CutDetailsContext = React.createContext(DEFAULT_STATE);

export const CutDetailsProvider = props => {
    const [cutDetails, setCutDetails] = React.useState(DEFAULT_STATE);

    return (
        <CutDetailsContext.Provider value={{ cutDetails, setCutDetails }}>
            {props.children}
        </CutDetailsContext.Provider>
    )
}