import React, { useState, useEffect } from 'react';
import { API_URL } from '../constants';

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);

        if (response.ok) {
          const json = await response.json();

          setPosts(json);
        } else {
          throw response;
        }
      } catch (error) {
        setError(error);
      } finally {
          setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div>
      {/* {posts.map((post) => (
        <div key={post.id} className='post-container'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))} */}
      {posts.map((post) => {
        return (
          <div key={post.id} className='post-container'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>  
        );
      })}
    </div>
  );
}