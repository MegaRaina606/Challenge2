import React from 'react';
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Post List</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create New Post</NavLink>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;