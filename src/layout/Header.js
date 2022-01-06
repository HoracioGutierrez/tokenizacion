import { Button, Container, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position='static' id="layout-header" color='transparent'>
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <img id="main-logo" src='/assets/images/logo_naranja.png' alt='Fintech Logo' />
                    <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}>
                        <Button className='layout-header-link' color='inherit'disableRipple disableElevation to="/que-es-tokenizacion" component={Link}>
                            Qué es la tokenización?
                        </Button>
                        <Button className='layout-header-link' color='inherit'disableRipple disableElevation to="/beneficios" component={Link}>
                            Beneficios
                        </Button>
                        <Button className='layout-header-link' color='inherit'disableRipple disableElevation to="/proyectos" component={Link}>
                            Proyectos
                        </Button>
                        <Button className='layout-header-link' color='inherit'disableRipple disableElevation to="/marketplace" component={Link}>
                            Marketplace
                        </Button>
                        <Button variant='contained'>Conectar a Wallet</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
