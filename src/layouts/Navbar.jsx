import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";


import adsmovil_logo_white from "../assets/adsmovil_logo_white.png";

const Navbar = ({language,setLanguage}) => {
    const [isActiveLocale, setIsActiveLocale] = useState(language);
    const {t, i18n} = useTranslation();

    const handleLanguage = (locale) => {
        i18n.changeLanguage(locale);
        setLanguage(locale);
        setIsActiveLocale(locale);
    }
  return (
    <Box sx={{ flexGrow: 1, zIndex: '100' }}>
      <AppBar position="static" color="adsmovil">
        <Toolbar>
          <Container maxWidth="xl" sx={{marginX: '1.5rem'}}>
            <Grid container display="flex" direction="row" alignItems="center">
              <Box component="div" sx={{ flexGrow: 1 }}>
                <img
                  src={adsmovil_logo_white}
                  alt="logo adsmovil"
                  style={{ width: "150px" }}
                />
              </Box>
            <IconButton onClick={ () => handleLanguage('es')} >
              <Typography variant="h6" color={isActiveLocale === 'es' ? 'primary' : 'white'} value="es">
                SPA
              </Typography>
            </IconButton>
            <IconButton onClick={() => handleLanguage('pt')}>
              <Typography variant="h6" color={isActiveLocale === 'pt' ? 'primary' : 'white'} value="pt" sx={{marginX: "1.25rem"}}>
                POR
              </Typography>
            </IconButton>
            <IconButton onClick={() => handleLanguage('en')}>
              <Typography variant="h6" color={isActiveLocale === 'en' ? 'primary' : 'white'} value="en">
                ENG
              </Typography>
            </IconButton>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
