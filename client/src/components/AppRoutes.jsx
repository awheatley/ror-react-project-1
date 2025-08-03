import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/:id" element={ <PostDetails /> } />
      <Route path="/new" element={<h1>New post form</h1>} />
    </Routes>
  );
}