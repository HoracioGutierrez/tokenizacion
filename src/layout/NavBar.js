import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import ItemListHorizontal from "./ItemListHorizontal"
import ItemListDrawer from "./ItemListDrawer"

const NavBar = () => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("lg"))

    return (
        <div>
            {matches ? <ItemListHorizontal/> : <ItemListDrawer/>}
        </div>
    )
}

export default NavBar
