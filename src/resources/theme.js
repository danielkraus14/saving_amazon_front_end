import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            dark: "#44B5B7",
            main: "#31C1C4",
            light: "#73BFC2"
        },
        adsmovil: {
            main: "#152154"
        },
        secondary: {
            main: "#4F7600",
            dark: "#1A5219"
        },
        buttonColor: {
            main: "#9CC97C",
            light: "#BBDBA4"
        },
        customPanel: {
            main: "#606686",
            contrastText: "#F0CB30"
        },
        footerColor: {
            main: "#E5E9EC"
        },
        fontColor: {
            main: "#393939"
        },
    },
    typography: {
        fontFamily: "Raleway, Arial, sans-serif",
        h2: {
            fontSize: "3.125rem",
            fontWeight: '700'
        },
        h4: {
            fontSize: "1.6875rem",
            fontWeight: '600'
        },
        h5: {
            fontSize: "1.125rem",
            fontWeight: '400'
        },
        h6: {
            fontSize: "1rem",
            fontWeight: '500',
            lineHeight : '1.5rem'
        }
    },
});

export default theme;