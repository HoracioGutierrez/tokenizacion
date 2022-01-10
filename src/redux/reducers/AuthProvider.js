import { USER_LOGIN_MANUALLY } from "../actionConstants"

const initialState = {
    logged : false,
}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_MANUALLY : 
            return {
                ...state,
                logged : true,
            }
        default:
            return state
    }
}

export default AuthReducer
