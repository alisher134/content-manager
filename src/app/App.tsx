import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from '@pages/Dashboard';
import { Login } from '@pages/Login';
import { NotFound } from '@pages/NotFound';
import { PostDetails } from '@pages/PostDetails';
import { PostEditor } from '@pages/PostEditor';
import { PostFeed } from '@pages/PostFeed';
import { Profile } from '@pages/Profile';
import { Register } from '@pages/Register';
import { Team } from '@pages/Team';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-background text-foreground flex min-h-screen flex-col">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts" element={<PostFeed />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/posts/new" element={<PostEditor />} />
          <Route path="/posts/:id/edit" element={<PostEditor />} />
          <Route path="/team" element={<Team />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
