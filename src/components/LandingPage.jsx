import React from "react";
import { Grid, Typography } from "@mui/material";

import amazon_logo from "../assets/amazon_logo.png";
import palm_trees from "../assets/palm_trees.png";
import tree_amazon from "../assets/tree_amazon.png";

const LandingPage = ({language}) => {
  let currentLanguage = language;
  return (
    <>
    <Grid container width="100%" justifyContent='flex-end'>
      <Grid
        item
        display="flex"
        position="absolute"
        sx={{ marginTop: "-42px", marginLeft: "-48px", zIndex: "-1", left: '0' }}
        xs={4}
      >
        <img
          src={palm_trees}
          alt="palm trees"
          style={{ width: "425px", zIndex: "-1" }}
        />
      </Grid>
      <Grid
        container
        item
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ marginTop: "1.8rem" }}
        xs={8}
      >
        <Grid item /*  sx={{ flexGrow: 1 }} */>
          <Typography
            variant="h6"
            color="fontColor"
            sx={{
              fontSize: "14px",
              lineHeight: "16px",
              paddingRight: "4.875rem",
            }}
          >
            ¿Qué Logramos?
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            color="fontColor"
            sx={{ fontSize: "14px", lineHeight: "16px" }}
          >
            La Comunidad
          </Typography>
        </Grid>
        <Grid item sx={{ marginX: "6.25rem" }}>
          <img
            src={amazon_logo}
            alt="saving the amazon"
            style={{ width: "92px" }}
          />
        </Grid>
      </Grid>
    </Grid>
    <Grid container width="100%" justifyContent='flex-end'>
            <Grid item container flexDirection='column' alignItems='center' justifyContent='center' xs={7}>
              <Grid item>
                <Typography variant='h2' color="secondary">
                  { currentLanguage === 'en' ? "Let's sow the future together. One tree at a time" : currentLanguage === 'es' ? 'Sembremos juntos el futuro. Un árbol a la vez'  :  "Vamos semear o futuro juntos. Uma árvore de cada vez" }
                </Typography>
              </Grid>
              <Grid item></Grid>
              <Grid item container></Grid>
            </Grid>
            <Grid item xs={4} sx={{marginRight: '2.5rem'}} display='flex' justifyContent='flex-end' alignItems='center' >
              <img src={tree_amazon} alt="planted tree" width="90%"/>
            </Grid>
    </Grid>
    </>
  );
};

export default LandingPage;
