import { createContext } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { toggleDarkMode, toggleDrawer } from "../../redux/actions/LayoutActions"
import { loginManually } from "../../redux/actions/AuthActions"

export const context = createContext()
const { Provider } = context

const ActionProvider = ({ children }) => {

    const dispatch = useDispatch()
    const bindedActions = bindActionCreators({ toggleDarkMode, toggleDrawer , loginManually }, dispatch)

    const actions = {
        ...bindedActions
    }

    return (
        <Provider value={actions}>
            {children}
        </Provider>
    )
}

export default ActionProvider
