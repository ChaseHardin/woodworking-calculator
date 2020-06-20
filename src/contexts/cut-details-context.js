import React from 'react';

const DEFAULT_STATE = {
    board: {
        value: undefined,
        label: 'Board Length',
        ft: undefined,
        in: undefined,
        fr: undefined
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

        // eslint-disable-next-line
    }, [cutDetails.board.ft, cutDetails.board.in, cutDetails.board.fr]);

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

    if (board.in && board.fr) {
        boardLength = boardLength.concat(`${board.in} ${board.fr}"`)
    } else if (board.in) {
        boardLength = boardLength.concat(`${board.in}"`);
    } else if(board.fr) {
        boardLength = boardLength.concat(`${board.fr}"`)
    }

    return boardLength;
}