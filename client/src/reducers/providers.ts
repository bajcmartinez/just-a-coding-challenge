import { RECEIVE_PROVIDERS, IProviderActionTypes } from '../actions/providers';
import { IProvider } from "../types/provider";

export interface IProvidersState {
    list: IProvider[]
}

const initialState: IProvidersState = {
    list: []
};

export function providersReducer(
    state = initialState,
    action: IProviderActionTypes
): IProvidersState {
    switch (action.type) {
        case RECEIVE_PROVIDERS:
            return {
                list: [...action.payload]
            };

        default:
            return state;
        
    }
}