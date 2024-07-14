import logo from './logo.svg';
import './App.css';
// import { useLocation } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from './NavBar/NavBar';
import NavBar1 from './NavBar/NavBar1';
import BooksList from './pages/BooksList';
import Login from './pages/Auth/Login';
import AllRoutes from './Router/AllRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {


  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <AllRoutes />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
