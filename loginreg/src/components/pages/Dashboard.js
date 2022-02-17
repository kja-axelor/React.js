import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout clicked");
    navigate("/login");
  };
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <Typography variant="h4">Dashboard Page</Typography>
          <Typography variant="h5">Name:krjani</Typography>
          <Typography variant="h6">Email:krjani@codekr.com</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
