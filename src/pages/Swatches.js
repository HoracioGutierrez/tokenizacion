import { AppBar, Button, Container, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Swatches = () => {
    return (
        <div>
            <Button className='link-button' color='inherit' disableRipple disableElevation to="/test-link" component={Link}>
                Link Boton
            </Button>
            <Button variant='contained'>Boton primario</Button>
            <Button variant='contained' color="secondary">Boton secundario</Button>
            <Button variant='contained' className="curved">Boton curvo primario</Button>
            <Button variant='contained' color="secondary" className="curved">Boton curvo secundario</Button>
            <div className="spacing"/>
            <div className="spacing"/>
            <Typography>Test parrafo</Typography>
            <Typography color="primary">Test parrafo Primario</Typography>
            <Typography color="secondary">Test parrafo Secundario</Typography>
            <div className="spacing"/>
            <div className="spacing"/>
            <Typography variant="h5">Test Titulo</Typography>
            <Typography variant="h5" color="primary">Test Titulo Primario</Typography>
            <Typography variant="h5" color="secondary">Test Titulo Secundario</Typography>
            <div className="spacing"/>
            <div className="spacing"/>
            <AppBar position="relative" className="noShadowHeader">
                <Container maxWidth>
                    <Typography>Header Primario</Typography>
                </Container>
            </AppBar>
            <div className="spacing"/>
            <AppBar position="relative" color="secondary" className="noShadowHeader">
                <Container maxWidth>
                    <Typography>Header Secundario</Typography>
                </Container>
            </AppBar>
            <div className="spacing"/>
            <AppBar position="relative" color='transparent' className="noShadowHeader">
                <Container maxWidth>
                    <Typography>Header Blanco</Typography>
                </Container>
            </AppBar>
        </div>
    )
}

export default Swatches
