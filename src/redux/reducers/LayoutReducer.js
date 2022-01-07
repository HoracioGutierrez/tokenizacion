import { TOGGLE_DARK_MODE, TOGGLE_DRAWER } from "../actionConstants"

const initialState = {
    dark : false,
    drawer_open : false,
    links : [
        {
            id : 0,
            text : "inicio",
            to : "/",
            public : true
        },
        {
            id : 1,
            text : "Que es la tokenización?",
            to : "/que-es-tokenizacion",
            public : true
        },
        {
            id : 2,
            text : "Beneficios",
            to : "/beneficios",
            public : true
        },
        {
            id : 3,
            text : "Proyectos",
            to : "/proyectos",
            public : true
        },
        {
            id : 4,
            text : "Marketplace",
            to : "/marketplace",
            public : true
        }
    ]
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