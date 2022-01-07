import { Button, Container, Hidden, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import useActions from "../hooks/useActions"
import useLayout from '../hooks/useLayout';
import NavBar from './NavBar';

const Header = () => {

    const { toggleDrawer } = useActions()
    const { drawer_open } = useLayout()

    return (
        <AppBar position='static' id="layout-header" color='transparent'>
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <img id="main-logo" src='/assets/images/logo_naranja.png' alt='Fintech Logo' />
                    <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}>
                        <NavBar />
                        <Button variant='contained'>Conectar a Wallet</Button>
                        <Hidden lgUp>
                            <IconButton onClick={toggleDrawer} className='material-icons'>
                                menu
                            </IconButton>
                        </Hidden>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
