import { Paper, Stack } from "@mui/material";

function Dashboard() {
  return (
    <Stack
      direction={"row"}
      spacing={6}
      sx={{
        p: "40px",
        height: "calc(100vh - 64px)",
        maxHeight: "calc(100vh - 64px)",
      }}
    >
      {/* bgcolor: "#121212" */}
      <Paper
        sx={{
          backgroundColor: "#5C95F7",
          height: 240,
          display: "inline",
          width: "30%",
          maxWidth: "300px",
          minWidth: "200px",
          borderRadius: "10px",
          marginLeft: "5%",
          boxShadow: 7,
          ":hover": {
            boxShadow: 20,
          },
        }}
      ></Paper>
      <Paper
        sx={{
          backgroundColor: "#5C95F7",
          height: 240,
          display: "inline",
          width: "30%",
          maxWidth: "300px",
          minWidth: "200px",
          borderRadius: "10px",
          boxShadow: 7,
          ":hover": {
            boxShadow: 20,
          },
        }}
      ></Paper>
      <Paper
        sx={{
          backgroundColor: "#5C95F7",
          height: 240,
          display: "inline",
          width: "30%",
          maxWidth: "300px",
          minWidth: "200px",
          borderRadius: "10px",
          boxShadow: 7,
          ":hover": {
            boxShadow: 20,
          },
        }}
      ></Paper>
    </Stack>
  );
}

export default Dashboard;

