import { Button, Divider } from "@mui/material"
import { Link } from "react-router-dom"
import useLayout from "../hooks/useLayout"

const ItemListHorizontal = () => {

    const { links } = useLayout()

    return (
        <>
            {links.map(({to,id,text}) => (
                <Button key={id} className='layout-header-link' color='inherit' disableRipple disableElevation to={to} component={Link}>
                    {text}
                </Button>
            ))}
        </>
    )
}

export default ItemListHorizontal
