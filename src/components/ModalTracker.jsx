import React, { useEffect, useState } from "react";
import { Grid, Box, Link, useTheme, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useTranslation } from "react-i18next";

import amazon_logo from "../assets/amazon_logo.png";
import ellipse_green from "../assets/ellipse_green.png";
import grow_tree from "../assets/grow_tree.png";

export default function ModalTracker({
  isModalOpen,
  setIsModalOpen,
  trackerValue,
  adsmovilUser,
  setAdsmovilUser,
}) {
  const trackerNumber = Number(trackerValue);
  const { t } = useTranslation();
  const theme = useTheme();
  const [existUser, setExistUser] = useState(false);
  const [attributes, setAttributes] = useState([]);
  const [certificatesEn, setCertificatesEn] = useState([]);
  const [urlCertificateEn, setUrlCertificateEn] = useState("");
  const [imageTree, setImageTree] = useState("");
  const [imageSocialMedia, setImageSocialMedia] = useState("");
  const [certificatesEs, setCertificatesEs] = useState([]);
  const [certificatesPt, setCertificatesPt] = useState([]);

  const handleModalClose = () => setIsModalOpen(false);
  const trackerUrl = `http://localhost:1337/api/adsmovil-users?populate=certificates_en&populate=certificates_pt&populate=certificates_es&populate=tree_picture&filters[adsmovil_code][$eq]=${trackerNumber}`;
  useEffect(() => {
    if (isModalOpen) {
      const fetchAdsmovilUser = async () => {
        const user_adsmovil = await axios.get(trackerUrl);
        if (user_adsmovil.data.data.length > 0) {
          setExistUser(true);
          setAdsmovilUser(user_adsmovil);
        }
      };

      fetchAdsmovilUser().catch((error) => console.log(error));
    }
  }, [trackerUrl, isModalOpen]);
  useEffect(() => {
    console.log(adsmovilUser);
    if (adsmovilUser !== undefined) {
      adsmovilUser.data && setAttributes(adsmovilUser.data.data[0].attributes);
      adsmovilUser.data &&
        setCertificatesEn(
          adsmovilUser.data.data[0].attributes.certificates_en.data
        );
      adsmovilUser.data &&
        setCertificatesEs(
          adsmovilUser.data.data[0].attributes.certificates_es.data
        );
      adsmovilUser.data &&
        setCertificatesPt(
          adsmovilUser.data.data[0].attributes.certificates_pt.data
        );
      adsmovilUser.data &&
        setImageTree(
          `http://localhost:1337${adsmovilUser.data.data[0].attributes.tree_picture.data.attributes.url}`
        );
    }
  }, [adsmovilUser]);

  useEffect(() => {
    if (certificatesEn.length > 0) {
      setUrlCertificateEn(
        `http://localhost:1337${certificatesEn[0].attributes.url}`
      );
      setImageSocialMedia(
        `http://localhost:1337${certificatesEn[1].attributes.url}`
      );
    }
  }, [certificatesEn]);
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "20px",
          }}
        >
          <Typography id="modal-modal-title" variant="h2" color="primary">
            {t("modalTracking.title")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {t("modalTracking.subtitle")}
          </Typography>

          <Grid
            item
            container
            display="flex"
            direction="row"
            alignItems="center"
            marginTop="2.5rem"
            marginBottom="3rem"
          >
            <Grid
              item
              xs={4}
              sx={{
                borderRadius: "20px",
                backgroundImage: `url(${imageTree})`,
                backgroundSize: "cover",
                backgroundPositionY: "bottom",
                width: "250px",
                height: "250px",
                maxWidth: "250px !important",
                marginRight: "3rem",
              }}
              md
            ></Grid>
            <Grid item container xs={8} md>
              <Grid item xs={12} marginBottom="1rem">
                <Typography variant="h4" color="fontColor">
                  {adsmovilUser.data &&
                    adsmovilUser.data.data[0].attributes.name}
                </Typography>
                <Typography variant="h5" color="fontColor">
                  {t("modalTracking.codeNumber")}{" "}
                  <Box
                    display="inline-block"
                    sx={{ fontWeigth: "600", fontSize: "1.6875rem" }}
                  >
                    {" "}
                    {adsmovilUser.data &&
                      adsmovilUser.data.data[0].attributes.adsmovil_code}
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12} marginBottom="1rem">
                <Link
                  href={urlCertificateEn}
                  target="_blank"
                  sx={{ color: `${theme.palette.fontColor.main}` }}
                >
                  {t("modalTracking.downloadCertificate")}
                </Link>
              </Grid>
              <Grid item xs={12} marginBottom="1rem">
                <Link
                  href={imageSocialMedia}
                  target="_blank"
                  sx={{ color: `${theme.palette.fontColor.main}` }}
                >
                  {t("modalTracking.downloadImage")}
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="h5" color="fontColor">
                  {t("modalTracking.caption")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={8}>
              <Typography variant="h4" color="primary" marginBottom="1rem">
                {t("modalTracking.timeToAct")}
              </Typography>
              <Typography variant="h5" color="fontColor" marginBottom="1rem">
                {t("modalTracking.timeToActDescription")}
              </Typography>
              <Grid item container xs={12} display="flex" alignItems="center">
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                  >
                    <Typography
                      variant="h5"
                      color="white"
                      sx={{ fontWeight: "700", padding: "0.5rem 0.2rem" }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      {t("modalTracking.plantTreeButton")}
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <img src={amazon_logo} alt="tree" width="92px" />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={grow_tree}
                alt="tree"
                width="220px"
                style={{ position: "absolute", bottom: "2rem", right: "4rem" }}
              />
              <img
                src={ellipse_green}
                alt="tree"
                width="189px"
                style={{ position: "absolute", zIndex: "-1" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
