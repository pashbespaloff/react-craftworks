import React from 'react';
import { Route, Routes } from "react-router-dom";
import PublicPage from "./PublicPage";
import SecretPage from './SecretPage';

export default function RoutingRoot() {
  return (
    <Routes>
      <Route path="/react-craftworks/public" element={<PublicPage />} />
      <Route path="/react-craftworks/secret" element={<SecretPage />} />
    </Routes>
  )
};