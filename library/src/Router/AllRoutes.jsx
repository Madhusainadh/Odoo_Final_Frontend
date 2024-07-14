import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BooksList from '../pages/BooksList'
import Cart from '../pages/Cart'
import UserPage from '../pages/UserPage'

const AllRoutes = () => {
  return (
    <div>
      <NavBar1 /> {/* Keep the NavBar static */}
      <Routes>
      <Route path="/" element={<BooksList/>}  />
      <Route path='/Cart'   element={<Cart
      />}  />
      <Route path='/UserPage'   element={<UserPage/>}  />

      </Routes>
    </div>
  );
}

export default AllRoutes
