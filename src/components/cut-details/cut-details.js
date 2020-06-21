import React from 'react';
import './cut-details.css'
import { CutDetailsContext } from '../../contexts/cut-details-context';
import { ViewContext } from '../../contexts/view-context';
import { ResultsTable } from '../results/results-table';
import { BoardView } from '../views/board-view';
import { CutView } from '../views/cut-view';
import { MDBBtn } from 'mdbreact';

const styleFooter = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    marginBottom: '4rem'
};

export const CutDetails = () => {
    const { cutDetails } = React.useContext(CutDetailsContext);
    const { view, setView } = React.useContext(ViewContext);

    const showResults = cutDetails.board.ft || cutDetails.board.in || cutDetails.board.fr;
    const handleBack = () => setView({
        board: true,
        cut: false
    });

    const handleNext = () => setView({
        board: false,
        cut: true
    });

    return (
        <div>
            {view.board && <BoardView />}
            {view.cut && <CutView />}
            {showResults && <ResultsTable cutDetails={cutDetails} />}
            <div style={styleFooter}>
                {view.cut && <MDBBtn color='info' onClick={handleBack}>Back</MDBBtn>}
                <MDBBtn onClick={handleNext}>Next</MDBBtn>
            </div>
        </div>
    )
};
