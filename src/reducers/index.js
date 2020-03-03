import { combineReducers } from 'redux';

import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import voteReducer from './voteReducer';

const rootReducer = combineReducers({
    images: imagesReducer,
    isLoading: loadingReducer,
    error: errorReducer,
    vote: voteReducer
})

export default rootReducer;