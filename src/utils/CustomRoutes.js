import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../providers/AuthProvider/AuthProvider"

export const PublicRoute = ({ component: Component, ...rest }) => {
    const location = useLocation()
    const { logged } = useAuth()
    if(logged && location.state){
        return <Navigate to={location.state.from.pathname} />
    }else{
        return {...Component}
    }
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { logged } = useAuth()
    const location = useLocation()
    if(logged){
        return {...Component}
    }else{
        return <Navigate to="/" state={{ from: location }}/>
    }
}