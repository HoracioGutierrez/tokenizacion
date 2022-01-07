import { Button, Divider, Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Fragment } from "react"
import { Link } from "react-router-dom"
import useActions from "../hooks/useActions"
import useLayout from "../hooks/useLayout"

const ItemListDrawer = () => {

    const { links, drawer_open } = useLayout()
    const { toggleDrawer } = useActions()

    return (
        <Drawer open={drawer_open} onClose={toggleDrawer}>
            <List>
                <ListItem button>
                    <ListItemText>
                        <Button  variant='contained'>Conectar a Wallet</Button>
                    </ListItemText>
                </ListItem>
                {links.map(({ to, id, text }) => (
                    <Fragment key={id}>
                        <ListItem button>
                            <ListItemText>
                                <Link to={to}>{text}</Link>
                            </ListItemText>
                        </ListItem>
                    </Fragment>
                ))}
            </List>
        </Drawer>
    )
}

export default ItemListDrawer
