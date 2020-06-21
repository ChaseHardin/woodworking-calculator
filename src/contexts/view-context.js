import React from 'react';

const DEFAULT_STATE = {
    board: true
};

export const ViewContext = React.createContext(DEFAULT_STATE);

export const ViewProvider = props => {
    const [view, setView] = React.useState(DEFAULT_STATE);

    return (
        <ViewContext.Provider value={{ view, setView }}>
            {props.children}
        </ViewContext.Provider>
    )
}
