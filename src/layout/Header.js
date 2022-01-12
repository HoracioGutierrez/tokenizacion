import { Container, Hidden, IconButton, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import useActions from "../hooks/useActions"
import NavBar from './NavBar';

const Header = () => {

    const { toggleDrawer } = useActions()

    return (
        <AppBar position='static' id="layout-header" color='transparent'>
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <img id="main-logo" src='/assets/images/logo_naranja.png' alt='Fintech Logo' />
                    <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}>
                        <NavBar />
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
