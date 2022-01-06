import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#FF5A3C',
        },
        secondary: {
            main: '#16C5D6',
            contrastText: '#ffffff',
        },
        text: {
            secondary: '#16C5D6',
        },
        success: {
            main: '#4CAF50',
        },
    },
})

export default theme