import logo from './logo.svg';
import './App.css';
import { useLocation } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from './NavBar/NavBar';
import BooksList from './pages/BooksList';

function App() {

  
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <ChakraProvider>
    <div className="App">
      <NavBar/>
     <BooksList/>
    </div>
     </ChakraProvider>
  );
}

export default App;
