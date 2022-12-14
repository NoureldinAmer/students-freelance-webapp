import {
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
import { ProjectContributorsHeaders } from "./ProjectContributorsHeaders";
import { useLocation } from "react-router-dom";

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

function ProjectContributors() {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let requestOptions = {
        url: `http://localhost:3000/projects/${location.state.detail.id}/contributors`,
        method: 'GET',
        redirect: 'follow'
      }
      const response = await fetch(`http://localhost:3000/projects/${location.state.detail.id}/contributors`, requestOptions);
      if (response.status === 200) {
        const responseData = await response.json() 
        setData(responseData.results)
        console.log(responseData.results);
      }
  }

  fetchData()
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
              {ProjectContributorsHeaders.map((column) => (
                <HeaderTableCell
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
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code}
                  sx={{
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: 1,
                    },
                  }}
                >
                  {ProjectContributorsHeaders.map((column) => {
                    const value = row[column.accessor];
                    return (
                      <TableCell
                        key={column.accessor}
                        align="center" 
                        sx={column.accessor === "DatePosted" ? {width: "10%"} : null}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
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

export default ProjectContributors;
