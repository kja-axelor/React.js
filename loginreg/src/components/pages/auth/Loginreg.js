import { Box, Card, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import shooping from "../../../Images/shopping.png";
import Registration from "./Registration";
import Userlogin from "./Userlogin";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const Loginreg = () => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = useState(0);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{ height: "90vh" }}>
          <Grid
            item
            lg={7}
            sm={5}
            sx={{
              backgroundImage: `url(${shooping})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: { xs: "none", sm: "block" },
              marginTop: 2,
            }}
          ></Grid>
          <Grid item lg={5} sm={7} xs={12}>
            <Card sx={{ width: "100%", height: "100%" }}>
              <Box sx={{ height: 520 }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    textColor="secondary"
                    indicatorColor="secondary"
                    value={value}
                    onChange={handleChange}
                  >
                    <Tab
                      label="Login"
                      sx={{ textTransform: "none", fontWeight: "bold" }}
                    />
                    <Tab
                      label="Registration"
                      sx={{ textTransform: "none", fontWeight: "bold" }}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Userlogin />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Registration />
                </TabPanel>
              </Box>
              <Box textAlign="center" sx={{ mt: 2 }}>
                <ShoppingBagIcon sx={{ color: "purple", fontSize: 100 }} />
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Krjani's App
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Loginreg;
