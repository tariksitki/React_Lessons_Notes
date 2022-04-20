import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/firebaseUtil";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../redux/actions/AuthActions";

const MyNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {currentUser} = useSelector(state => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/");
  };
    // logout islemi burada gerceklesiyor. bunu kendimiz de yapabilirdik. söyle:
    // yani google in kodunu kullanmamis olsak da biz user i silmek icin action tanimlamistik
    // peki bu func nasil calisiyor. navbar icinde bulunan logout buttonuna tikladigimizda handleLogout func calisir ve bu da google in logout func inini calistirir.
    // aslinda logou func ile biz google da logut yaptiriyoruz. yani bu islemden sonra component larimiz render edilmeden önce bu bilgi app.js de google dan alinacak ve bizim state imiz daha ilk basta degisecekti. ama biz nasil oldugunu görelim diye burada dispatch i de kullandik.
    
  const handleLogout = () => {
    setAnchorEl(null);
    logout();
    dispatch(clearCurrentUser)
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            CLARUSWAY NEWS
          </Typography>

          {currentUser ? (
            <div>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography
                  sx={{
                    marginRight: "1rem",
                  }}
                >
                  {currentUser?.displayName}
                </Typography>
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>News</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              onClick={handleRegister}
              color="inherit"
            >
              <Typography
                sx={{
                  marginRight: "0.5rem",
                }}
              >
                Register
              </Typography>
              <LockOpenIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyNavbar;
