import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from '@pages/Dashboard';
import { Login } from '@pages/Login';
import { NotFound } from '@pages/NotFound';
import { PostDetails } from '@pages/PostDetails';
import { PostEditor } from '@pages/PostEditor';
import { PostFeed } from '@pages/PostFeed';
import { Profile } from '@pages/Profile';
import { ProfileSettings } from '@pages/ProfileSettings';
import { Register } from '@pages/Register';
import { Team } from '@pages/Team';

import { ROUTES } from '@/app/Routes';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-background text-foreground flex min-h-screen flex-col">
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.POSTS} element={<PostFeed />} />
          <Route path={ROUTES.POST_DETAILS} element={<PostDetails />} />
          <Route path={ROUTES.POST_NEW} element={<PostEditor />} />
          <Route path={ROUTES.POST_EDIT} element={<PostEditor />} />
          <Route path={ROUTES.TEAM} element={<Team />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.PROFILE_SETTINGS} element={<ProfileSettings />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
