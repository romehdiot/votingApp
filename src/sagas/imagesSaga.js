import { takeEvery, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setError } from '../actions';
//const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        //const page = yield select(getPage)
        const images = yield call(fetchImages);
        yield put(setImages(images));
    } catch (error) {
        //dispatch error
        yield put(setError(error.toString()));
    }
}

function* imagesSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default imagesSaga;