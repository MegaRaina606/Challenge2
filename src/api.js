import axios from 'axios';

export const fetchPosts = async (currentPage, postsPerPage) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${(currentPage - 1) * postsPerPage}&_limit=${postsPerPage}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
