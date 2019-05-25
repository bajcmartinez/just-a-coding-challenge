import { combineReducers } from 'redux';

import { providersReducer } from './providers';

const rootReducer = combineReducers({
    providers: providersReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;