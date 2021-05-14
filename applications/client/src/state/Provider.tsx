import React, {createContext, useReducer, ReactElement} from "react";
import rootReducer from "./reducers/root.reducer";
import {IApplicationState} from "./types";
import {initialState} from "./initialState";

interface StateProviderProps {
    children: ReactElement;
}

interface IStateContext {
    state: IApplicationState;
    dispatch: ({type}:{type:string, payload?: any}) => void;
}

export const GlobalStore = createContext({} as IStateContext);

const asyncer = (dispatch: any, state: IApplicationState) => (action: any) =>
    typeof action === 'function' ? action(dispatch, state) : dispatch(action);

export function StateProvider(props: StateProviderProps) {
    const [state, dispatchBase] = useReducer(rootReducer, initialState);
    const dispatch = asyncer(dispatchBase, state);

    return (
        <GlobalStore.Provider value={{ state, dispatch }}>
            { props.children }
        </GlobalStore.Provider>
    )
}
