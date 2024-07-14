import logo from "./logo.svg";
import "./App.css";
// import { useLocation } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "./NavBar/NavBar";
import BooksList from "./pages/BooksList";
import store from "./Store/Store";
import { Provider } from "react-redux";
import { useToast } from '@chakra-ui/react';
import ReactTable from "./Components/Table";
import UserPage from "./pages/UserPage";
import Cart from "./pages/Cart";

import NavBar from './NavBar/NavBar';
import BooksList from './pages/BooksList';
import Login from './pages/Auth/Login';
import AllRoutes from './Router/AllRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {


  // const location = useLocation();
  // console.log(location.pathname);
  // Define columns
  const data = [
    { id: 1, name: 'Alice', age: 25 ,number:232},
    { id: 2, name: 'Bob', age: 27 ,number:232},
    { id: 3, name: 'Charlie', age: 22 ,number:232},
    { id: 1, name: 'Alice', age: 25,number:232 },
  ];
  
const columns = [
  {
    Header: 'ID',
    accessor: 'id' // accessor is the "key" in the data
  },
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'NUmber',
    accessor: 'number'
  }
];

  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="App">
          <NavBar />
          <Login/>
          {/* <AllRoutes/> */}
          <BooksList />
          <Cart/>
          <UserPage />
          {/* <ReactTable columns={columns}  data = {data} /> */}
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
