import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import About from "./components/AboutSection"
import Work from "./components/Work"
import Footer from "./components/Footer"
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AnimatePresence } from 'framer-motion';




export const primaryColor = "#FFF";




const theme = createTheme({
  multilineColor: {
    color: 'red'
  },
  palette: {
    primary: { main: primaryColor },
  },

  typography: {
    fontFamily: [
      'Prompt'
    ],
    color: "#FFF"

  }
});

const pageTransitions = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
};

const App = () => {

  return (


    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <AnimatePresence exitBeforeEnter>
            <Navbar />
            <Home />
            <About pageTransitions={pageTransitions} />
            <Work />


            <Footer />
          </AnimatePresence>

        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
