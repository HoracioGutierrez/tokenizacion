import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Fragment } from "react"
import { Link } from "react-router-dom"
import useActions from "../hooks/useActions"
import useLayout from "../hooks/useLayout"
import { useAuth } from "../providers/AuthProvider/AuthProvider"

const ItemListDrawer = () => {

    const { links, drawer_open } = useLayout()
    const { toggleDrawer } = useActions()
    const { manualLogin, manualLogout, logged } = useAuth()

    return (
        <Drawer open={drawer_open} onClose={toggleDrawer}>
            <List>
                <ListItem button>
                    <ListItemText>
                        <Button onClick={logged ? manualLogout : manualLogin} variant='contained'>
                            {logged ? 'Desconectar' : 'Conectar a Wallet'}
                        </Button>
                    </ListItemText>
                </ListItem>
                {links.map(({ to, id, text }) => (
                    <Fragment key={id}>
                        <ListItem button>
                            <ListItemText>
                                <Link to={to} className="drawer-link">{text}</Link>
                            </ListItemText>
                        </ListItem>
                    </Fragment>
                ))}
            </List>
        </Drawer>
    )
}

export default ItemListDrawer
