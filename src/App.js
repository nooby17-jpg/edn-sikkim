import './App.css';
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Switch as RouteSwitch, Route}from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NiosForm from "./Components/NiosForm/NiosForm";
import {Avatar, Link} from "@material-ui/core";
import logo from "./Assets/Images/LogoOfSikkim.png"
import Footer from "./Components/Footer/Footer";
import Guidelines from "./Components/Guidelines/Guidelines";
import Success from "./Components/Success/Success";
import RegularForm from "./Components/RegularForm/RegularForm";
import PolytechnicForm from "./Components/PolytechnicForm/PolytechnicForm";
import Content from "./Components/Content/Content";



const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title:{
    marginLeft: 10,
    fontFamily: '"Oswald", sans-serif',
    fontSize: 20,
    fontWeight: 700,
    color: "#f2f2f2",
    [theme.breakpoints.up('xs')]: {
      fontSize: 18,
      fontWeight:600,
    },
  },
  title2:{
    marginLeft: 10,
    fontWeight: 400,
    fontFamily: '"Oswald", sans-serif',
    fontSize: 18,
    color: "#f2f2f2",
    [theme.breakpoints.up('xs')]: {
      fontSize: 16,
      fontWeight: 300,
    },
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
 /* toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },*/
  alignmargin:{
    marginLeft: "auto"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  square:{
    borderRadius: 4,
    width: 60,
    height: 60,
    filter: "luminosity(10.5)",
    [theme.breakpoints.up('xs')]: {
     width: 40,
      height: 40,
    },
  }
}));

function App() {

  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? "#4a5863" : "#0b99e4";
  const mainSecondaryColor = darkState ? "#ececec" : "#202020";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      },
    }
  });
  const classes = useStyles();
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
              <Avatar variant="circle"  className={classes.square} alt="Sikkim Logo" src={logo} />
              <Link href="/" className="NavLink">
                <Typography
                    component="h1"
                    variant="subtitle2"
                    color="secondary"
                    noWrap
                    className={classes.title2}
                >
                  Govt. of Sikkim
                </Typography>
                <Typography
                    component="h1"
                    variant="h6"
                    color="secondary"
                    noWrap
                    className={classes.title}
                >
                  Education Department
                </Typography>
              </Link>
              {/*<FormControlLabel
                  className={classes.alignmargin}
                  control={<Switch checked={darkState} onChange={handleThemeChange} name="checkedA" />}
                  label="DarkMode"
              />*/}
              <Switch  className={classes.alignmargin} checked={darkState} onChange={handleThemeChange}/>
            </Toolbar>
          </AppBar>
        <RouteSwitch>
          <Route path="/" exact component={Content}/>
          <Route path="/notice"  component={Guidelines}/>
          <Route path="/niosform"  component={NiosForm}/>
          <Route path="/regularform"  component={RegularForm}/>
          <Route path="/polytechnicform"  component={PolytechnicForm}/>
          <Route path="/success"  component={Success}/>
        </RouteSwitch>
        <Footer/>
      </ThemeProvider>
  );
}

export default App;
