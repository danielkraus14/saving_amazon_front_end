import React from "react";
import { Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import tree_amazon from "../assets/tree_amazon.png";

const MainScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <>
      <Grid container width="100%" justifyContent="flex-end">
        <Grid
          item
          container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          xs={7}
          sx={{ marginTop: "5.25rem" }}
        >
          <Grid item sx={{ alignSelf: "flex-start" }}>
            <Typography variant="h2" color="secondary">
              {t("landingPage.title")}
            </Typography>
            <Typography variant="h2" color="secondary">
              {t("landingPage.subtitle")}
            </Typography>
          </Grid>
          <Grid
            item
            alignSelf="flex-start"
            sx={{ paddingTop: "2.375rem", paddingBottom: "3.8rem" }}
          >
            <Typography
              variant="h5"
              color="fontColor"
              sx={{ maxWidth: "635px" }}
              align="justify"
            >
              {t("landingPage.description")}
            </Typography>
          </Grid>
          {/* CONTAINER FOR STADISTICS AND TRACKING */}
          <Grid item container>
            {/* SECTION STADISTICS */}
            <Grid item container maxWidth="320px" xs={7}>
              <Grid item>
                <Typography variant="h4" color="secondary" sx={{}}>
                  {t("landingPage.sectionForestTitle")}
                </Typography>
              </Grid>

              <Grid item container sx={{ paddingTop: "1.25rem" }}>
                <Grid
                  item
                  sx={{
                    backgroundColor: `${theme.palette.buttonColor.light}`,
                    width: "13.125rem",
                  }}
                >
                  <Typography
                    variant="h3"
                    color="white"
                    sx={{ paddingBotton: "0.5rem", paddingTop: "0.5rem" }}
                    align="center"
                  >
                    {t("landingPage.sectionForestTreesPlanted")}
                  </Typography>
                  <Typography
                    variant="h5"
                    color={theme.palette.secondary.dark}
                    sx={{ paddingBottom: "1.3rem" }}
                    align="center"
                  >
                    {t("landingPage.sectionForestTrees")}
                  </Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: `${theme.palette.buttonColor.main}`,
                    width: "13.125rem",
                  }}
                >
                  <Typography
                    variant="h3"
                    color="white"
                    sx={{ paddingBotton: "0.5rem", paddingTop: "0.5rem" }}
                    align="center"
                  >
                    {t("landingPage.sectionForestCO2Captured")}
                  </Typography>
                  <Typography
                    variant="h5"
                    color={theme.palette.secondary.dark}
                    sx={{ paddingBottom: "1.3rem" }}
                    align="center"
                  >
                    {t("landingPage.sectionForestCO2")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* SECTION TRACKING */}
            <Grid item container direction="column" xs={5}>
              <Grid item>
                <Typography variant="h4" color="primary" sx={{}}>
                  {t("landingPage.section2TrackTitle")}
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  color="primary"
                  id="tracking-input"
                  placeholder={t("landingPage.section2TrackInputPlaceholder")}
                  sx={{ width: "16.5rem", marginTop: "1rem", height: "2.5rem" }}
                />
              </Grid>
              <Grid item sx={{ marginTop: "1.4rem" }}>
                <Button variant="contained" color="primary">
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{ fontWeight: "700", padding: "0.5rem 3rem" }}
                  >
                    {t("landingPage.section2TrackButton")}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Typography variant="h5" color="fontColor" align="left" sx={{marginTop: '1.8rem'}}>
              {t("landingPage.caption")}
            </Typography>
          </Grid>
        </Grid>
        {/* CONTAINER IMAGE */}
        <Grid
          item
          xs={3}
          sx={{ marginLeft: "-5rem", marginRight: "2.5rem", zIndex: "-1" }}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <img
            src={tree_amazon}
            alt="planted tree"
            style={{ width: "25rem" }}
          />
        </Grid>
        <Grid
          item
          xs={10}
          display="flex"
          justifyContent="flex-start"
          sx={{ paddingLeft: "2.5rem", marginTop: "1.8rem" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default MainScreen;
