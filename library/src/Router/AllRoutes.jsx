import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar1 from '../NavBar/NavBar1'
// import RoadDamageReport from '../Components/Citizen/Pages/RoadDamageReport/RoadDamageReport'
// import RoadDamageReportGov from '../Components/Gov/Pages/RoadDamageReportGov/RoadDamageReportGov'
// import Home from '../Components/Home/Home'
import Login from '../pages/Auth/Login'
import BooksList from '../pages/BooksList'
import Email from '../pages/Auth/Register'

const AllRoutes = () => {
  return (
    <div>
      <NavBar1 /> {/* Keep the NavBar static */}
      <Routes>
        <Route path="/" element={<BooksList />} /> {/* Home page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/Register" element={<Email />} /> {/* Login page */}
      </Routes>
    </div>
  );
}

export default AllRoutes
