import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material"
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
                {links.map(({ to, id, text }) => (
                    <Fragment key={id}>
                        <ListItem button>
                            <ListItemText>
                                <Link to={to} className='css-1kfpdn6-MuiButtonBase-root-MuiButton-root'>{text}</Link>
                            </ListItemText>
                        </ListItem>
                        <Divider/>
                    </Fragment>
                ))}
            </List>
        </Drawer>
    )
}

export default ItemListDrawer
