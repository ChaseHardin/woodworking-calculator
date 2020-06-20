import React from 'react';

const DEFAULT_STATE = {
    board: {
        value: '',
        label: 'Board Length',
        ft: '',
        in: ''
    }
};

export const CutDetailsContext = React.createContext(DEFAULT_STATE);

export const CutDetailsProvider = props => {
    const [cutDetails, setCutDetails] = React.useState(DEFAULT_STATE);

    React.useEffect(() => {
        setCutDetails({
            ...cutDetails,
            board: {
                ...cutDetails.board,
                value: makeBoardLength(cutDetails.board)
            }
        });

    }, [cutDetails.board.ft, cutDetails.board.in]);

    return (
        <CutDetailsContext.Provider value={{ cutDetails, setCutDetails }}>
            {props.children}
        </CutDetailsContext.Provider>
    )
}

const makeBoardLength = (board) => {
    let boardLength = '';

    if (board.ft) {
        boardLength = boardLength.concat(`${board.ft}' `);
    }

    if (board.in) {
        boardLength = boardLength.concat(`${board.in}"`);
    }

    return boardLength;
}