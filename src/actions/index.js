import { IMAGES } from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD
})

const setImages = (images) => ({
    type: IMAGES.LOAD_SUCCES,
    images,
})

const setError = (error) => ({
    type: IMAGES.LOAD_FAIL,
    error,
})

const voteDucati = () =>( {
    
        type: "VOTEDUCATI"
    
})

const voteHarleyDavidson = () => {
    return {
        type: "VOTEHARLEYDAVIDSON"
    }
}

const voteYamaha = () => {
    return {
        type: "VOTEYAMAHA"
    }
}

const voteKawasaki = () => {
    return {
        type: "VOTEKAWASAKI"
    }
}

export {
    loadImages,
    setImages,
    setError,

    voteDucati,
    voteHarleyDavidson,
    voteYamaha,
    voteKawasaki
}