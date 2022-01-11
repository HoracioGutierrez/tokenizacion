import { createContext, useContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";
import useActions from "../../hooks/useActions";

export const context = createContext()
const { Provider } = context

export const useAuth = () => {
    return useContext(context)
}

const AuthProvider = ({ children }) => {

    const [logged, setLogged] = useState(false)
    const actions = useActions()
    const moralis = useMoralis()
    const { account, auth, user, authenticate, refetchUserData, isAuthenticated, isAuthenticating, isWeb3Enabled, isWeb3EnableLoading, enableWeb3, logout } = useMoralis()

    //const auth = moralis.auth //el auth tiene .state que dice si estoy unauthenticated , authenticated o undefined
    //const isAuthenticated = moralis.isAuthenticated //true o false
    //const isWeb3Enabled = moralis.isWeb3Enabled //true o false
    //const web3 = moralis.web3 //web3
    //const account = moralis.account //current account address in metamask that listens to metamask changes

    //console.log(moralis)
    //console.log(isWeb3Enabled)

    const manualLogin = async () => {
        console.log("manual Login")
        if(isWeb3Enabled){
            authenticate()
        }else{
            toast.error("Por favor revise su extension de Metamask y vuelva a intentarlo")
        }
    }

    const manualLogout = async () => {
        console.log("manual Logout")
        logout()
        setLogged(false)
    }

    //console.group("Authentication")
    //console.log("Metamask Address : ", account)
    //console.log("Moralis Authentication (Taken from storage or login) : ", isAuthenticated)
    //console.log("Moralis Authentication (Taken from storage or login) : ", auth.state)
    //console.log("Current User : ", user ? user.get("ethAddress") : "No user")
    //console.groupEnd("Authentication")

    useEffect(() => {

        console.group("Authentication")
        console.log("Estado actual de autenticacion : ", isAuthenticated)
        console.log("Autenticando : ", isAuthenticating)
        console.groupEnd("Authentication")

        if (isAuthenticated && !isAuthenticating && auth.state == "authenticated" && isWeb3Enabled) {
            if (user) {
                if (user.get("ethAddress") !== account && account) {
                    console.log(user.get("ethAddress"))
                    console.log(account)
                    console.log("El usuario ya estaba logueado de antes pero cambio de cuenta en metamask y no coincide con la cuenta logueada actualmente en el storage asi que pido reautenticacion")
                    toast.warn("Por favor revise su extension de Metamask y apruebe el cambio de cuenta!")
                    authenticate()
                } else if(!account) {
                    console.log("Estaba logueado hace un rato y desaparecio la cuenta en metamask porque se desloguearon desde ahi y no desde el layout")
                    setLogged(false)
                } else {
                    console.log("El usuario ya estaba logueado de antes y coincide con la cuenta logueada actualmente en el storage asi que no hago nada, solamente cambio el estado local de logged a true")
                    setLogged(true)
                } 
            }
        }

        

    }, [isAuthenticated, isAuthenticating, auth.state, account,isWeb3Enabled])

    useEffect(() => {

        if (user) {
            console.group("Efecto : Local Address")
            console.log("Estado del Local Address : ", user.get("ethAddress"))
            console.groupEnd("Efecto : Local Address")
        } else {
            console.group("Efecto : Local Address")
            console.log("Estado del Local Address : ", "No user")
            console.groupEnd("Efecto : Local Address")
        }


    }, [user])

    useEffect(() => {

        console.group("Efecto : User State")
        console.log("Estado del State actual : ", auth.state)
        console.groupEnd("Efecto : User State")

    }, [auth.state])

    useEffect(() => {

        console.group("Efecto : Account change")
        console.log("Estado del Account actual : ", account)
        console.groupEnd("Efecto : Account change")

    }, [account])

    /* useEffect(() => {
        //si estoy autenticado o mi cuenta aparece en el storage entonces se reconoce metamask y se pone el numero de cuenta que haya en metamask, no en el storage
        console.log("Cambio la cuenta de metamask : " + account)

    }, [account]) */

    useEffect(() => {
        console.group("Efecto : WEB3")
        //verificar que web3 esta habilitado, si no lo esta , habilitarlo
        console.log("Estado de web3 actual : " + isWeb3Enabled)

        if (!isWeb3Enabled && !isWeb3EnableLoading) {
            console.log("Habilitando web3...")
            enableWeb3()
        }
        console.groupEnd("Efecto : WEB3")
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