import { useContext } from "react"
import {context} from "../providers/ActionProvider/ActionProvider"

const useActions = () => {
    return useContext(context)
}

export default useActions
