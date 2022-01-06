import { Box, Button, Typography } from "@mui/material"
import theme from "../providers/ThemeProvider/theme"

const Landing = () => {
    return (
        <>
            <section id="landing-section-banner" className="landing-section">
                <div id="banner-text">
                    <Typography variant="h2" color="secondary">
                        <Box component="span">
                            Tokenización
                        </Box>
                        <Box component="span" color="Scrollbar" bgcolor={theme.palette.secondary.main}>de activos financieros</Box>
                    </Typography>
                    <Typography variant="h5" component="p">
                        Invierta de manera fácil y segura en RealEstate utilizando la tecnología Blockchain y Smart Contracts. Acceda a las mejores oportunidades de inversiones moviliarias con una alta rentabilidad y liquidez.
                    </Typography>
                    <Button variant="contained" color="primary">
                        <Typography variant="h5">COMIENTE A INVERTIR</Typography>
                    </Button>
                </div>
                <div id="banner-img">
                    <img src="/assets/svg/header02.svg" alt="Landing Banner"/>
                </div>
            </section>
            <section id="landing-section-roundicons" className="landing-section">
                <div className="roundicons-item">
                    <img src="/assets/svg/iconos-01.svg" alt="Landing Roundicons 01"/>
                    <Typography variant="h5" className="roundicons-item-title">1. BÚSQUEDA</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam.</Typography>
                </div>
                <div className="roundicons-item">
                    <img src="/assets/svg/iconos-02.svg" alt="Landing Roundicons 02"/>
                    <Typography variant="h5" className="roundicons-item-title">2. TOKENIZACIÓN</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam.</Typography>
                </div>
                <div className="roundicons-item">
                    <img src="/assets/svg/iconos-03.svg" alt="Landing Roundicons 03"/>
                    <Typography variant="h5" className="roundicons-item-title">3. DIVIDENDOS</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam.</Typography>
                </div>
                <div className="roundicons-item">
                    <img src="/assets/svg/iconos-04.svg" alt="Landing Roundicons 04"/>
                    <Typography variant="h5" className="roundicons-item-title">4. MARKETPLACE</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam.</Typography>
                </div>
            </section>
            <section id="tres" className="landing-section"></section>
            <section id="cuatro" className="landing-section"></section>
            <section id="cinco" className="landing-section"></section>
        </>
    )
}

export default Landing
