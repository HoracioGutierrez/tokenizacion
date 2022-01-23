import { createContext, useContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";

export const context = createContext()
const { Provider } = context

export const useAuth = () => {
    return useContext(context)
}

const AuthProvider = ({ children }) => {

    const [logged, setLogged] = useState(false)
    const { account, auth, user, authenticate, isAuthenticated, isAuthenticating, isWeb3Enabled, isWeb3EnableLoading, enableWeb3, logout } = useMoralis()


    const manualLogin = async () => {
        if(isWeb3Enabled){
            authenticate()
        }else{
            toast.error("Por favor revise su extension de Metamask y vuelva a intentarlo")
        }
    }

    const manualLogout = async () => {
        logout()
        setLogged(false)
    }

    useEffect(() => {
        if (isAuthenticated && !isAuthenticating && auth.state === "authenticated" && isWeb3Enabled) {
            if (user) {
                if (user.get("ethAddress") !== account && account) {
                    toast.warn("Por favor revise su extension de Metamask y apruebe el cambio de cuenta!")
                    authenticate()
                } else if(!account) {
                    setLogged(false)
                } else {
                    setLogged(true)
                } 
            }
        }
    }, [isAuthenticated, isAuthenticating, auth.state, account,isWeb3Enabled])


    useEffect(() => {
        if (!isWeb3Enabled && !isWeb3EnableLoading) {
            enableWeb3()
        }
    }, [isWeb3Enabled])

    const valorDelProvider = {
        manualLogin,
        manualLogout,
        logged
    }


    return (
        <Provider value={valorDelProvider}>
            {children}
        </Provider>
    )
}

export default AuthProvider