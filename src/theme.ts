import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#4fa78d',
            main: '#36846d',
            dark: '#1b604c',
        },
        secondary: {
            light: '#c42223',
            main: '#a11314',
            dark: '#810d0d',
        }
    }
})


export default theme;