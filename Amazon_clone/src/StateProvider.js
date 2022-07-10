import React, {createContext, useContext, useReducer} from 'react';

//prepares the data layout
export const StateContext = createContext();

//wraps the app and provides the data layout
export const StateProvider = ({ reducer, initialState, children}) => (<StateContext.Provider value={useReducer(reducer, initialState)}> {children}
</StateContext.Provider>);

//pulls information from the data layout
export const useStateValue = () => useContext(StateContext);