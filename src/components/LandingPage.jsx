import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import { useTranslation} from "react-i18next";

import amazon_logo from "../assets/amazon_logo.png";
import palm_trees from "../assets/palm_trees.png";
import tree_amazon from "../assets/tree_amazon.png";

const LandingPage = () => {
  const {t} = useTranslation();
  const theme = useTheme();
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
          {t('links.link1')}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            color="fontColor"
            sx={{ fontSize: "14px", lineHeight: "16px" }}
          >
          {t('links.link2')}
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
    <Grid container width="100%" justifyContent='flex-end' >
            <Grid item container flexDirection='column' alignItems='center' justifyContent='center' xs={6} sx={{marginRight: '-45px', paddingLeft: '2rem'}} >
              <Grid item sx={{alignSelf: 'flex-start'}}>
                <Typography variant='h2' color="secondary">
                  { t('landingPage.title') }
                </Typography>
                <Typography variant='h2' color="secondary">
                  { t('landingPage.subtitle') }
                </Typography>
              </Grid>
              <Grid item alignSelf='flex-start' sx={{paddingTop: '2.375rem', paddingBottom: '3.8rem'}}>
                <Typography variant='h5' color="fontColor" sx={{maxWidth: '635px'}} align='justify' > 
                  {t('landingPage.description')}
                </Typography>

              </Grid>
              <Grid item container>
                <Grid item container>
                  <Grid item>
                    <Typography variant='h4' color="secondary" sx={{}} >
                      { t('landingPage.sectionForestTitle') }
                    </Typography>
                  </Grid>

                  <Grid item container sx={{paddingTop: '1.25rem'}} >
                    <Grid item sx={{backgroundColor: `${theme.palette.buttonColor.light}`, width: '13.125rem'}} >
                      <Typography variant='h2' color="white" sx={{paddingBotton: '0.5rem'}} align="center" >
                        { t('landingPage.sectionForestTreesPlanted') }
                      </Typography>
                      <Typography variant='h5' color={theme.palette.secondary.dark} sx={{paddingBottom: '1.3rem'}} align="center" >
                        { t('landingPage.sectionForestTrees') }
                      </Typography>
                    </Grid>
                    <Grid item>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container direction='column'>
                  <Grid item>
                  </Grid>
                  <Grid item>
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sx={{marginRight: '2.5rem'}} display='flex' justifyContent='flex-end' alignItems='center' >
              <img src={tree_amazon} alt="planted tree" width="90%"/>
            </Grid>
    </Grid>
    </>
  );
};

export default LandingPage;
