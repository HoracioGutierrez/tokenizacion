import { useSelector } from "react-redux"

const useLayout = () => {
    return useSelector(state => state.layout)
}

export default useLayout