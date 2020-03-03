import { IMAGES } from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
        case IMAGES.LOAD_SUCCES:
            return null;
        case IMAGES.LOAD_FAIL:
            return action.error;
        default:
            return state;
    }
}

export default errorReducer;