import { Container, Hidden, IconButton, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import { HashLink } from 'react-router-hash-link';
import useActions from "../hooks/useActions"
import ElevatedHeader from './ElevatedHeader';
import NavBar from './NavBar';

const Header = () => {

    const { toggleDrawer } = useActions()

    return (
        <ElevatedHeader>
            <AppBar position='fixed' id="layout-header" color="inherit">
                <Container maxWidth="xxl">
                    <Toolbar disableGutters>
                        <HashLink to="/#" smooth>
                            <img id="main-logo" src='/assets/images/logo_naranja.png' alt='Fintech Logo' />
                        </HashLink>
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
        </ElevatedHeader>
    )
}

export default Header
