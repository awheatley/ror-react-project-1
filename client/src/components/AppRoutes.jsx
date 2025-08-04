import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import NewPostForm from "./NewPostForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="posts/:id" element={ <PostDetails /> } />
      <Route path="/new" element={ <NewPostForm /> } />
    </Routes>
  );
}