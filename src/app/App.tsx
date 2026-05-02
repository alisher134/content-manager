import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {
  Dashboard,
  Login,
  NotFound,
  PostDetails,
  PostEditor,
  PostFeed,
  Profile,
  ProfileSettings,
  Register,
  Team,
} from '@pages';

import { ROUTES } from '@/app/Routes';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-background text-foreground flex min-h-screen flex-col">
        <Routes>
          <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
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
