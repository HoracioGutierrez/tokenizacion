import { Box, Button, Hidden, Typography } from "@mui/material"
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
                    <img src="/assets/svg/header02.svg" alt="Landing Banner" />
                </div>
            </section>
            <section id="landing-section-roundicons" className="landing-section">
                <div className="roundicons-item">
                    <img src="/assets/svg/iconos-01.svg" alt="Landing Roundicons 01" />
                    <Typography variant="h5" className="roundicons-item-title">1. BÚSQUEDA</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam.</Typography>
                </div>
                <div className="roundicons-item">
                    <img src="/assets/svg/iconos-02.svg" alt="Landing Roundicons 02" />
                    <Typography variant="h5" className="roundicons-item-title">2. TOKENIZACIÓN</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam.</Typography>
                </div>
                <div className="roundicons-item">
                    <img src="/assets/svg/iconos-03.svg" alt="Landing Roundicons 03" />
                    <Typography variant="h5" className="roundicons-item-title">3. DIVIDENDOS</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam.</Typography>
                </div>
                <div className="roundicons-item">
                    <img src="/assets/svg/iconos-04.svg" alt="Landing Roundicons 04" />
                    <Typography variant="h5" className="roundicons-item-title">4. MARKETPLACE</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam.</Typography>
                </div>
            </section>
            <section id="landing-section-how" className="landing-section">
                <Hidden mdDown>
                    <div id="how-img">
                        <img src="/assets/svg/dibujo.svg" alt="How it works?" />
                    </div>
                </Hidden>
                <div id="how-text">
                    <Typography color="secondary" id="how-text-first">Encontrá el mejor proyecto para invertir</Typography>
                    <Typography color="inherit" variant="h4" id="how-text-second">¿Qué activos se pueden tokenizar?</Typography>
                    <Typography color="inherit" id="how-text-third">Es posible mediante blockchain diversos tipos de activos financieros:</Typography>
                    <div id="how-icons">
                        <img src="/assets/svg/iconos-03-ASD.svg" alt="iconos03-ASD.svg" />
                        <img src="/assets/svg/iconos-04-ASD.svg" alt="iconos04-ASD.svg" />
                        <img src="/assets/svg/iconos-05.svg" alt="iconos05.svg" />
                    </div>
                    <Typography color="inherit" variant="h4" id="how-text-fourth">¿Qué es la tokenización?</Typography>
                    <Typography color="inherit" id="how-text-fifth">Es el proceso de digitalización de activos a través de la blockchain. Todas las transacciones son inmutables, están garantizadas y derecho el cual puede ser comercializado de manera segura y sin intermediarios en cualquier momento.</Typography>
                </div>
            </section>
            <section id="cuatro" className="landing-section"></section>
            <section id="cinco" className="landing-section"></section>
        </>
    )
}

export default Landing
