import React from 'react';

const DEFAULT_STATE = {
    board: {
        value: undefined,
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