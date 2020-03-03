//loadding state of the application

import { IMAGES } from '../constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return true;
        case IMAGES.LOAD_SUCCES:
            return false;
        case IMAGES.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;