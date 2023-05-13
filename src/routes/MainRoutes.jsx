import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainlayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";

function MainRouts() {
  return (
    <Routes>
      <Route element={<Mainlayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
}

export default MainRouts;
