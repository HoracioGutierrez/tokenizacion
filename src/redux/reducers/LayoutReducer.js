import routes from "../../routes"
import { TOGGLE_DARK_MODE, TOGGLE_DRAWER } from "../actionConstants"

const initialState = {
    dark : false,
    drawer_open : false,
    links : routes.filter(route => route.isHeaderLink).sort((a, b) => a.linkOrder - b.linkOrder),
    routes : routes.filter(route => route.isRoute)
}

const LayoutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_DRAWER : 
            return {
                ...state,
                drawer_open : !state.drawer_open
            }
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