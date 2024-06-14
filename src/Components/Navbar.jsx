import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import MainContent from "./MainContent";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";

// Icons
import { FaHome } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMoneyBill1 } from "react-icons/fa6";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ThemeSwitch from "./ThemeSwitch";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../features/auth/authSlice";
import { useEffect } from "react";
import { getSingleTicket } from "../features/tickets/ticketSlice";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",

  // [theme.breakpoints.up("md")]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.up("xs")]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
  [theme.breakpoints.up("xl")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));


const Navbar = ({changeTheme }) => {
  
  const params = useParams();

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSingleTicket(params._id))
  },[])

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Navigate

  const { user } = useSelector((state) => state.auth);


  // LogOut
  const dispath = useDispatch();

  const handleLogOut = () => {
    dispath(logOutUser())
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="primary">
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Typography variant="h4" noWrap component="div">
              Support-Desk
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={changeTheme }
          >
            <ThemeSwitch/>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className="display-none">
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Home", "Admin"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <IconButton color="primary" aria-label="add an alarm">
                      <Link to="/">
                        <FaHome fontSize="large" />
                      </Link>
                    </IconButton>
                  ) : (
                    <IconButton color="primary" aria-label="add an alarm">
                      <Link to="/admin">
                      <MdAdminPanelSettings fontSize="large" />
                      </Link>
                    </IconButton>
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Create Ticket"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <IconButton color="primary" aria-label="add an alarm">
                    <Link to="/ticket/createTicket">
                      <IoIosCreate fontSize="large"/>
                    </Link>
                  </IconButton>
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All Ticket"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                 
                    <IconButton color="primary" aria-label="add an alarm">
                      <Link to="/ticket/allTicket">
                        <IoAddCircleOutline fontSize="large" />
                      </Link>
                    </IconButton>
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        
        {
          user ? (
        <List>
          {["Logout"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
              onClick={handleLogOut}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <IconButton color="primary" aria-label="add an alarm">
                    <RiLogoutBoxLine fontSize="large" />
                  </IconButton>
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
          ) : (
            <List>
          {["Register", "Login"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <IconButton color="primary" aria-label="add an alarm">
                      <Link to="/register">
                        <HowToRegIcon fontSize="large" />
                      </Link>
                    </IconButton>
                  ) : (
                    <IconButton color="primary" aria-label="add an alarm">
                      <Link to="/login">
                        <RiLoginBoxLine fontSize="large" />
                      </Link>
                    </IconButton>
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
          )
        }

      </Drawer>
      <Container>
        <DrawerHeader/>
      </Container>
    </Box>
  );
};

export default Navbar;
