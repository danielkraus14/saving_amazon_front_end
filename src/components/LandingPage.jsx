import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import amazon_logo from "../assets/amazon_logo.png";
import palm_trees from "../assets/palm_trees.png";
import MainScreen from "./MainScreen";

const LandingPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <>
      <Grid container width="100%" justifyContent="flex-end">
        <Grid
          item
          display="flex"
          position="absolute"
          sx={{
            marginTop: "-42px",
            marginLeft: "-48px",
            zIndex: "-1",
            left: "0",
          }}
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
              {t("links.link1")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              color="fontColor"
              sx={{ fontSize: "14px", lineHeight: "16px" }}
            >
              {t("links.link2")}
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
      <MainScreen />
    </>
  );
};

export default LandingPage;
