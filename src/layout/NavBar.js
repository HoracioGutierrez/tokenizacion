import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import ItemListHorizontal from "./ItemListHorizontal"
import ItemListDrawer from "./ItemListDrawer"

const NavBar = () => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("lg"))

    return (
        <>
            {matches ? <ItemListHorizontal/> : <ItemListDrawer/>}
        </>
    )
}

export default NavBar
