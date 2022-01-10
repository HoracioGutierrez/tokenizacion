import { Button, Divider } from "@mui/material"
import { Link } from "react-router-dom"
import useActions from "../hooks/useActions"
import useLayout from "../hooks/useLayout"

const ItemListHorizontal = () => {

    const { links } = useLayout()
    const { loginManually } = useActions()

    return (
        <>
            {links.map(({ to, id, text }) => (
                <Button key={id} className='layout-header-link' color='inherit' disableRipple disableElevation to={to} component={Link}>
                    {text}
                </Button>
            ))}
            <Button variant='contained' onClick={loginManually}>Conectar a Wallet</Button>
        </>
    )
}

export default ItemListHorizontal
