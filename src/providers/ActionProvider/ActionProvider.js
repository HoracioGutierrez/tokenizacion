import { createContext } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { toggleDarkMode } from "../../redux/actions/LayoutActions"

export const context = createContext()
const { Provider } = context

const ActionProvider = ({children}) => {

    const dispatch = useDispatch()
    const test = bindActionCreators({toggleDarkMode},dispatch)

    const actions = {
        ...test
    }

    return (
        <Provider value={actions}>
            {children}
        </Provider>
    )
}

export default ActionProvider
