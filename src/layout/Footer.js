import { Box, Divider, Hidden, Typography } from "@mui/material"
import theme from "../providers/ThemeProvider/theme"

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: theme.palette.secondary.main }} id="layout-footer">
            <section id="footer-logo">
                <img id="main-footer-logo" src="/assets/images/logo_blanco.png" alt="Logo blanck"/>
            </section>
            <Hidden mdDown>
                <Divider orientation="vertical"/>
            </Hidden>
            <section id="footer-info">
                <div>
                    <Typography color="Scrollbar">French 120 2A</Typography>
                    <Typography color="Scrollbar">Ramos Mejia (1704) Gran Buenos Aires</Typography>
                    <Typography color="Scrollbar">info@mins.com.ar</Typography>
                    <Typography color="Scrollbar">Tel.5277-0674</Typography>
                </div>
            </section>
            <Hidden mdDown>
                <Divider orientation="vertical"/>
            </Hidden>
            <section id="footer-social">
                <nav>
                    <a href="https://instagram.com">
                        <img src="/assets/images/instagram.png" alt="Instagram logo"/>
                    </a>
                    <a href="https://facebook.com">
                        <img src="/assets/images/facebook.png" alt="Facebook logo"/>
                    </a>
                    <a href="https://twitter.com">
                        <img src="/assets/images/twitter.png" alt="Twitter logo "/>
                    </a>
                </nav>
            </section>
        </Box>
    )
}

export default Footer
