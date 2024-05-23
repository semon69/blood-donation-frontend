"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/material";
import Link from "next/link";
import { getUserInfo, isLoggedIn } from "@/actions/authServices";
import { useState } from "react";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import logo from "../../assets/logo.jpg"
import Image from "next/image";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const loggedIn = false
  const loggedIn = isLoggedIn();
  const { data } = useGetSingleUserQuery({});
  console.log(data);

  return (
    <Container sx={{
      marginY: "10px"
    }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ backgroundColor: "transparent" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Image src={logo} alt="image" width={50} height={50}  />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Box
                  className="space-y-2"
                  sx={{
                    margin: "10px",
                    fontWeight: 600,
                    fontSize: "25px",
                  }}
                >
                  <Typography>
                    <Link href={"/"}>Home</Link>
                  </Typography>
                  <Typography>
                    <Link href={"/about"}>About Us</Link>
                  </Typography>
                  {loggedIn ? (
                    <Typography>My Profile</Typography>
                  ) : (
                    <Typography>
                      <Link href={"/login"}>Login</Link>
                    </Typography>
                  )}
                </Box>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                // mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Image src={logo} alt="image" width={50} height={50}  />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginLeft: "80px",
              }}
            >
              <Stack direction={"row"} gap={8}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  <Link href={"/"}>Home</Link>
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  <Link href={"/about"}>About Us</Link>
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  <Link href={"/searchDonor"}>Search Donor</Link>
                </Typography>
                {loggedIn ? (
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    My Profile
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    <Link href={"/login"}>Login</Link>
                  </Typography>
                )}
              </Stack>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="image" src={data?.image} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
}
export default Navbar;
