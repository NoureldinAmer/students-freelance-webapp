import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import DescriptionIcon from '@mui/icons-material/Description';
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
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
  const [data, setData] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const userID = localStorage.getItem('userID');

      let requestOptions = {
        url: `http://localhost:3000/profile/freelancer/${userID}`,
        method: 'GET',
        redirect: 'follow'
      }
      const response = await fetch(`http://localhost:3000/profile/freelancer/${userID}`, requestOptions);
      if (response.status === 200) {
        const responseData = await response.json() 
        setData(responseData.results)
        console.log(responseData.results)
        setName(`${responseData.results.FirstName} ${responseData.results.LastName}`)
      }
  }

  fetchData()
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("userID");
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
          height: 600,
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
              src={`https://avatars.dicebear.com/api/initials/${name}.svg?scale=110`}
              alt="initials"
            />
          </Avatar>

          <CustomTypography variant="h3">{`${data.FirstName} ${data.LastName}`}</CustomTypography>
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
              {data.ID}
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
            <CustomTypography>{data.Username}</CustomTypography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <CustomTypography variant="h6" fontWeight={"bold"}>
              Email
            </CustomTypography>
            <CustomTypography>{data.Email}</CustomTypography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <CustomTypography variant="h6" fontWeight={"bold"}>
              PhoneNo
            </CustomTypography>
            <CustomTypography>{data.PhoneNo}</CustomTypography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            p={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Tooltip
              title="explore new job posts"
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
                <LocalOfferOutlinedIcon fontSize="inherit" />
              </CustomIconButton>
            </Tooltip>
            <Tooltip
              title="view my applications"
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
                onClick={() => history.push("/applications")}
              >
                <DescriptionIcon fontSize="inherit" />
              </CustomIconButton>
            </Tooltip>
            <Tooltip
              title="apply to job posts"
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
                onClick={() => history.push("/apply")}
              >
                <CreateIcon fontSize="inherit" />
              </CustomIconButton>
            </Tooltip>
            <Tooltip title="explore jobs" enterDelay={500} enterNextDelay={500}>
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
                <SearchIcon fontSize="inherit" />
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
