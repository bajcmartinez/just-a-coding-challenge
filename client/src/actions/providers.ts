import { ThunkAction } from 'redux-thunk';

import { ProvidersService } from '../services/providers';
import { IProvider, IProviderQuery } from '../types/provider';
import { IProvidersState } from '../reducers/providers';

export const RECEIVE_PROVIDERS = 'RECEIVE_PROVIDERS';

export interface IReceiveProvidersAction {
    type: string,
    payload: IProvider[]
}

export function receiveProviders(providers: IProvider[]): IReceiveProvidersAction {
    return {
        type: RECEIVE_PROVIDERS,
        payload: providers
    }
}

export const handleQueryProviders = (query: IProviderQuery):
    ThunkAction<void, IProvidersState, null, IReceiveProvidersAction> => async dispatch => {

    const providers = await new ProvidersService().query(query);
    dispatch(receiveProviders(providers));
};

export type IProviderActionTypes = IReceiveProvidersAction
