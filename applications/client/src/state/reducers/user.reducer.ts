import {IStateAction, IUserState} from "../types";
import {initialState} from "../initialState";

export enum userActionTypes {
    EXCHANGE = "EXCHANGE"
}

export const userReducer = (state: IUserState = initialState.user, action: IStateAction): IUserState => {
    switch(action.type) {
        case userActionTypes.EXCHANGE: {
            const { from, to } = action.payload;

            return {
                ...state,
                accounts: {
                    ...state.accounts,
                    [from.code]: parseFloat((state.accounts[from.code] - from.value).toFixed(2)),
                    [to.code]: parseFloat((state.accounts[to.code] + to.value).toFixed(2)),
                }
            };
        }
        default:
            return state;
    }
}
