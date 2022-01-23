import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import useLayout from "../hooks/useLayout"
import { useAuth } from "../providers/AuthProvider/AuthProvider"
import CustomHashLink from "./HashLink"

const ItemListHorizontal = () => {

    const { links } = useLayout()
    const { manualLogin, manualLogout, logged } = useAuth()

    return (
        <>
            {links.map(({ path, id, linkText , isHashLink , hash }) => (
                <Button key={id} className='layout-header-link' color='inherit' disableRipple disableElevation to={isHashLink?hash:path} component={
                    isHashLink ? CustomHashLink : Link
                }>
                    {linkText}
                </Button>
            ))}
            <Button onClick={logged ? manualLogout : manualLogin} variant='contained'>
                {logged ? 'Desconectar' : 'Conectar a Wallet' }
            </Button>
        </>
    )
}

export default ItemListHorizontal
