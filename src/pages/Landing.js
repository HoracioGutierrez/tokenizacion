import { Box, Typography } from "@mui/material"
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
                </div>
                <div id="banner-img">
                    <img src="/assets/svg/header02.svg" alt="Landing Banner"/>
                </div>
            </section>
            <section id="dos" className="landing-section"></section>
            <section id="tres" className="landing-section"></section>
            <section id="cuatro" className="landing-section"></section>
            <section id="cinco" className="landing-section"></section>
        </>
    )
}

export default Landing
