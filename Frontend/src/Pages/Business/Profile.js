import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#18385C" : "white",
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#B2BAC2" : "#6F7E86",
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#B2BAC2" : "#6F7E86",
}));



function Profile() {
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    history.push('./login');
  }

  return (
    <Stack
      sx={{
        p: "40px",
        height: "calc(100vh - 64px)",
        maxHeight: "calc(100vh - 64px)",
        overflowY: "scroll"
      }}
      justifyContent="center"
      alignItems={"center"}
      spacing={0}
    >
      <CustomBox
        sx={{
          width: 500,
          height: 500,
          boxShadow: 3,
          marginBottom: 10,
          borderRadius: "20px",
        }}
      >
        <Stack alignItems={"center"} p={4} spacing={2}>
          <Avatar
            sx={{
              width: "120px",
              height: "120px",
              boxShadow: 6,
            }}
          >
            <img
              src={`https://avatars.dicebear.com/api/initials/First Last.svg?scale=110`}
              alt="initials"
            />
          </Avatar>

          <CustomTypography variant="h3">First Last</CustomTypography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <CustomTypography variant="h6" fontWeight={"bold"} >
              ID
            </CustomTypography>
            <CustomTypography>
              c57e1ff1-a9f6-4b70-ae38-2a8f80c33ec7
            </CustomTypography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <CustomTypography variant="h6" fontWeight={"bold"}>
              Username
            </CustomTypography>
            <CustomTypography>My Username</CustomTypography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <CustomTypography variant="h6" fontWeight={"bold"}>
              Company
            </CustomTypography>
            <CustomTypography>Google</CustomTypography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            p={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Tooltip
              title="view job posts"
              enterDelay={500}
              enterNextDelay={500}
            >
              <CustomIconButton
                size="large"
                sx={{
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 7,
                    bgcolor: "inherit",
                  },
                }}
                onClick={() => history.push("/job-posts")}
              >
                <WorkIcon fontSize="inherit" />
              </CustomIconButton>
            </Tooltip>
            <Tooltip
              title="create new job post"
              enterDelay={500}
              enterNextDelay={500}
            >
              <CustomIconButton
                size="large"
                sx={{
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 7,
                    bgcolor: "inherit",
                  },
                }}
                onClick={() => history.push("/new-job-post")}
              >
                <CreateIcon fontSize="inherit" />
              </CustomIconButton>
            </Tooltip>
            <Tooltip
              title="view offers"
              enterDelay={1000}
              enterNextDelay={1000}
            >
              <CustomIconButton
                size="large"
                sx={{
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 7,
                    bgcolor: "inherit",
                  },
                }}
                onClick={() => history.push("/offers")}
              >
                <LocalOfferOutlinedIcon fontSize="inherit" />
              </CustomIconButton>
            </Tooltip>
            <Tooltip title="my company" enterDelay={500} enterNextDelay={500}>
              <CustomIconButton
                size="large"
                sx={{
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 7,
                    bgcolor: "inherit",
                  },
                }}
                onClick={() => history.push("/company-profile")}
              >
                <BusinessCenterIcon fontSize="inherit" />
              </CustomIconButton>
            </Tooltip>
            <Tooltip
              title="sign out"
              enterDelay={500}
              enterNextDelay={500}
            >
              <CustomIconButton
                onClick={() => handleLogout()}
                size="large"
                sx={{
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 7,
                    bgcolor: "inherit",
                  },
                }}
                //onClick={() => history.push("/job-posts")}
              >
                <LogoutIcon fontSize="inherit" />
              </CustomIconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </CustomBox>
    </Stack>
  );
}

export default Profile;
