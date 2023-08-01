import {
  styled,
  AppBar,
  AppBarProps,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    padding: theme.spacing(1, 3),
    background: "#ffffff",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 5),
    },
  }));

  const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: 0,
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      minHeight: 0,
    },
  }));

  return (
    <>
      <CustomAppBar position="sticky">
        <CustomToolbar>
          <Typography variant="h2" sx={{ color: "#0231C8", fontWeight: 700 }}>
            immence
          </Typography>
        </CustomToolbar>
      </CustomAppBar>

      <Outlet />
    </>
  );
};

export default Layout;
