import React from "react";
import Navbar from "./Pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User/User";
import AddUser from "./Pages/User/AddUser";
import Edit from "./Pages/User/Edit";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User/>} />
        <Route path="/add-user" element={<AddUser/>} />
        <Route path="/edit-user/:id" element={<Edit/>} />
      </Routes>
    </>
  );
}

export default App;
