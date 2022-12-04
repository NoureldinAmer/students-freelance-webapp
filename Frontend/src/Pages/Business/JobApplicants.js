import {
  Button,
  Fab,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { JobApplicantsHeaders } from "./JobApplicantsHeaders";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useLocation } from "react-router-dom";

const Job = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#18385C" : "red",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MyTable = styled(Table)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#18385C" : "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#0d294a" : "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontWeight: "bold"
}));

function JobApplicants() {
  const location = useLocation();
  const [data, setData] = useState([]);
  //console.log(`from Applicants: ${location.state.detail.id}`);
  useEffect(() => {
    const fetchData = async () => {
      console.log(`from Applicants: ${location.state.detail.id}`);
      let requestOptions = {
        url: `http://localhost:3000/job-posts/${location.state.detail.id}`,
        method: "GET",
        redirect: "follow",
      };
      const response = await fetch(
        `http://localhost:3000/job-posts/${location.state.detail.id}`,
        requestOptions
      );
      if (response.status === 200) {
        const responseData = await response.json();
        setData(responseData.results);
        console.log(responseData.results);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        p: "40px",
        height: "calc(100vh - 64px)",
        maxHeight: "calc(100vh - 64px)",
        overflowY: "scroll",
      }}
      justifyContent="center"
      alignItems={"center"}
      spacing={0}
    >
      <TableContainer component={Paper} sx={{ boxShadow: 6 }}>
        <MyTable sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {JobApplicantsHeaders.map((column) => (
                <HeaderTableCell
                  sx={{ fontWeight: "bold" }}
                  key={column.accessor}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.HEADER}
                </HeaderTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {JobApplicantsHeaders.map((column) => {
                    const value = row[column.accessor];
                    if (column.accessor === "url") {
                      return (
                        <TableCell key={column.accessor}>
                          <IconButton
                            aria-label="delete"
                            size="small"
                            href={value}
                            target="_blank"
                            sx={{
                              transition: "0.3s",
                              "&:hover": {
                                boxShadow: 10,
                              },
                            }}
                          >
                            <OpenInNewIcon fontSize="inherit" />
                          </IconButton>
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell key={column.accessor} align="center">
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </MyTable>
      </TableContainer>
    </Box>
  );
}

export default JobApplicants;
