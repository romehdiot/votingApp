const initialState = {
    ducati: 0,
    harleyDavidson: 0,
    yamaha: 0,
    kawasaki: 0,
}

const voteReducer = (state = initialState, action) => {
    switch(action.type) {
        case "VOTEDUCATI":
            return Object.assign({}, state, {ducati : state.ducati + 1});
        case "VOTEHARLEYDAVIDSON":
            return Object.assign({}, state, {harleyDavidson: state.harleyDavidson + 1});
        case "VOTEYAMAHA":
            return Object.assign({}, state, {yamaha: state.yamaha + 1});
        case "VOTEKAWASAKI":
            return Object.assign({}, state, {kawasaki: state.kawasaki + 1});
        default:
            return state;
    }
}

export default voteReducer;