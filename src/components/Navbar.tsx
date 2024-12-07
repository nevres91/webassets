import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Components", "Documentation", "About"];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ color: "white" }}>
      <Box
        sx={{
          display: "flex",
          background: "rgba(3, 24, 17, 0.5)",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box // Logo icon
          id="logo-icon"
          component="img"
          src={logo}
          width={"60px"}
          height={"60px"}
          my={"10px"}
          sx={{
            transition: "all 0.1s ease-in-out",
          }}
        />
      </Box>
      {/* <Divider /> */}
      <List sx={{ padding: "0" }}>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              "&:hover": {
                background: "rgba(12,149,155,0.5)",
                transition: "all 0.1s ease-in-out",
              },
            }}
          >
            <ListItemButton sx={{ textAlign: "start" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{ height: "70px", background: "#072e33", px: { xs: 2, sm: 3 } }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#b8e3e6", scale: "1.5" }} />
          </IconButton>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={{ xs: "center", sm: "space-between" }}
            margin={"5px 0"}
          >
            <Box // ---LOGO---
              id="logo"
              display={"flex"}
              sx={{
                cursor: "pointer",
                "&:hover #logo-icon": {
                  scale: "0.95",
                },
                "&:hover #logo-text": {
                  letterSpacing: "2px",
                  scale: "0.95",
                  transform: "translateX(-5px)",
                },
                "&:hover #logo-text-left": {
                  letterSpacing: "2px",
                  scale: "0.95",
                  transform: "translateX(5px)",
                },
              }}
            >
              <Typography // Logo text
                id="logo-text-left"
                variant="h5"
                letterSpacing={"3px"}
                component="div"
                color="#b8e3e6"
                alignContent={"center"}
                mr={"5px"}
                sx={{
                  flexGrow: 1,
                  display: { xs: "block", sm: "none" },
                  transition: "all 0.1s ease-in-out",
                }}
              >
                weB
              </Typography>
              <Box // Logo icon
                id="logo-icon"
                component="img"
                src={logo}
                width={"50px"}
                height={"50px"}
                mr={"10px"}
                sx={{ transition: "all 0.1s ease-in-out" }}
              />
              <Typography // Logo text
                id="logo-text"
                variant="h5"
                letterSpacing={"3px"}
                component="div"
                color="#b8e3e6"
                alignContent={"center"}
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  transition: "all 0.1s ease-in-out",
                }}
              >
                WebAssets
              </Typography>
              <Typography // Logo text
                id="logo-text"
                variant="h5"
                letterSpacing={"3px"}
                component="div"
                color="#b8e3e6"
                alignContent={"center"}
                sx={{
                  flexGrow: 1,
                  display: { xs: "block", sm: "none" },
                  transition: "all 0.1s ease-in-out",
                }}
              >
                Assets
              </Typography>
            </Box>
            <Box
              alignContent={"center"}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#b8e3e6" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "rgba(10, 41, 46, 0.7)",
              backdropFilter: "blur(3px)",
              boxShadow: "",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
