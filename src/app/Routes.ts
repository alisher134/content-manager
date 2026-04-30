export const ROUTES = {
  DASHBOARD: '/',
  POSTS: '/posts',
  POST_DETAILS: '/posts/:id',
  POST_NEW: '/posts/new',
  POST_EDIT: '/posts/:id/edit',
  TEAM: '/team',
  PROFILE: '/profile',
  PROFILE_SETTINGS: '/profile/settings',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

export const getRoute = {
  postDetails: (id: string | number) => `/posts/${String(id)}`,
  postEdit: (id: string | number) => `/posts/${String(id)}/edit`,
};
