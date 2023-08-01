import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/Layout/Layout";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
