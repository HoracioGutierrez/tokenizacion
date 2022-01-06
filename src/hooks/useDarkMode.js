import { useSelector } from "react-redux";

const useDarkMode = () => {
    return useSelector(state=>state.layout.dark)
}

export default useDarkMode;