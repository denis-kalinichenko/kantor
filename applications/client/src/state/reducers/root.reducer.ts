import {IApplicationState, IStateAction} from "../types";
import {userReducer} from "./user.reducer";
import {initialState} from "../initialState";

export default function rootReducer(state: IApplicationState, action: IStateAction): IApplicationState {
    const { user } = state;

    return {
        user: userReducer(user, action),
        currencies: initialState.currencies,
    }
}
