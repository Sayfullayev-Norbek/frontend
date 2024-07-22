import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { router } from "../router/routes";
import { Outlet, useLocation } from "react-router-dom";
import { ListItemIcon } from "@mui/material";

const drawerWidth = 250;

export default function ClippedDrawer() {
  const { pathname } = useLocation();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ backgroundColor: "#2CACE4" }}>
          <Typography variant="h6" noWrap component="div">
            Modme Telegram Integration
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {router.map((item, index) => (
              <ListItem
                sx={
                  item.path == pathname
                    ? {
                        backgroundColor: "#2CACE4",
                        ":hover": { backgroundColor: "#2494CB" },
                        color: "white",
                        transitionDuration: "0.3s",
                      }
                    : { transitionDuration: "0.3s" }
                }
                key={index}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    <span
                      className={pathname == item.path ? "text-[#fff]" : ""}
                    >
                      {item.icon}
                    </span>
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#EEF2F6", height: "100%" }}
      >
        <Toolbar />
        <Typography paragraph>
          <Outlet />
        </Typography>
      </Box>
    </Box>
  );
}
