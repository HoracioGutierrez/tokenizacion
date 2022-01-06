import { TOGGLE_DARK_MODE } from "../actionConstants"

const initialState = {
    dark : false
}

const LayoutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_DARK_MODE : 
            return {
                ...state ,
                dark : !state.dark
            }
        default:
            return state
    }
}

export default LayoutReducer