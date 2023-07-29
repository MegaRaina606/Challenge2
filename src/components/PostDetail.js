import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../api'; // Import fetchPosts from api.js

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => setCurrentPage((prev) => prev - 1);

  useEffect(() => {
    const fetchPostsData = async () => {
      const postsData = await fetchPosts(currentPage, postsPerPage);
      setPosts(postsData);
    };

    fetchPostsData();
  }, [currentPage, postsPerPage]);

  return (
    <div>
      {/* Rest of the component code remains the same */}
    </div>
  );
};

export default PostList;
