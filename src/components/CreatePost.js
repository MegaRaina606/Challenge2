/*
/*
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Basic form validation
      if (title.trim() === '') {
        alert('Title is required.');
        return;
      }

      if (description.trim() === '') {
        alert('Description is required.');
        return;
      }

      // API call to create new post
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body: description,
        userId: 1, // Assuming a user ID for simplicity
      });

      // Show success message and redirect to the post list page
      alert('Post created successfully!');
      navigate('/'); // Redirect to the previous post listing screen
    } catch (error) {
      // Handle error here
      console.error('Error creating post:', error);
      alert('Error creating post. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            maxLength={1000}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
*/

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchPosts } from '../api'; // Import fetchPosts from api.js

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Basic form validation
      if (title.trim() === '') {
        alert('Title is required.');
        return;
      }

      if (description.trim() === '') {
        alert('Description is required.');
        return;
      }

      // API call to create new post
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body: description,
        userId: 1, // Assuming a user ID for simplicity
      });

      // Show success message and redirect to the post list page
      alert('Post created successfully!');
      navigate('/'); // Redirect to the previous post listing screen

      // Fetch the updated list of posts
      const postsData = await fetchPosts(1, 10); // Assuming 10 posts per page
      // Update the posts state with the fetched data (setPosts is not defined here, we can remove this line)

    } catch (error) {
      // Handle error here
      console.error('Error creating post:', error);
      alert('Error creating post. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            maxLength={1000}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;


