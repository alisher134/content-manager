# Technical Specification: Pulse - m

## 1. Project Overview

**Pulse** is a high-performance Content Management and Analytics Portal designed for SMM agencies. The goal is to provide a unified workspace to manage content, track engagement metrics in real-time, and collaborate with a team.

The project serves as a primary practice ground for mastering **Advanced React Hooks** and **Senior Architectural Patterns**.

---

## 2. Key Features

### A. Analytics Dashboard (Bento Grid)

- **Real-time Metrics**: Dynamic cards showing "Total Reach", "Engagement Rate", and "Active Users".
- **Visual Feedback**: Charts and indicators that flash/update when data changes.
- **Hook Integration**: `useThrottle`, `useUpdateEffect`.

### B. Content Management (Post Feed)

- **Search & Filter**: Search bar with instant results and category filters.
- **Infinite Scrolling**: Lazy-loading posts as the user scrolls down.
- **Hook Integration**: `useDebounce`, `useIntersectionObserver`, `AbortController`.

### C. Advanced Post Editor

- **Draft Persistence**: Automatically saves post content to local storage.
- **Safety Checks**: Prevents accidental tab closing if a save is in progress.
- **Hook Integration**: `useLocalStorage`, `useBeforeUnload`.

### D. Team & Session Management

- **User Directory**: List of team members with status indicators.
- **Action Menus**: Contextual menus for user management.
- **Hook Integration**: `useClickOutside`, `useOnlineStatus`.

---

## 3. Technical Requirements

### Required Custom Hooks (Target Learning)

| Hook                      | Use Case                                                      |
| :------------------------ | :------------------------------------------------------------ |
| `useDebounce`             | Throttling API search requests to 400ms after last keystroke. |
| `useThrottle`             | Limiting real-time metric updates to 2 times per second.      |
| `AbortController`         | Cancelling stale fetch requests on fast route/filter changes. |
| `useIntersectionObserver` | Detecting list bottom for infinite scroll pagination.         |
| `useLocalStorage`         | Synchronizing drafts across multiple browser tabs.            |
| `useClickOutside`         | Managing closing states for dropdowns and popovers.           |
| `useOnlineStatus`         | Handling "Offline" mode with UI blocking and auto-reconnect.  |

### Architecture (as per AGENTS.md)

- **Strict Layering**: No `components -> pages` or `hooks -> components` imports.
- **Folder-based Components**: `ComponentName/index.ts`, `ComponentName.tsx`, `ComponentName.variants.ts`.
- **Path Aliases**: Use `@app`, `@pages`, `@components`, `@services`, `@hooks`, `@utils`, `@types`.

---

## 4. Data Schema (`db.json`)

### `users`

- `id`, `email`, `password`, `name`, `role` (Admin/Editor), `avatarUrl`, `isOnline`.

### `posts`

- `id`, `title`, `content`, `authorId`, `category`, `createdAt`, `status` (Draft/Published), `likes`, `views`.

### `analytics`

- Real-time snapshots or aggregated data for the dashboard charts.

---

## 6. Advanced Engineering Patterns (Middle+ Standards)

| Pattern                 | Objective                                                                                            |
| :---------------------- | :--------------------------------------------------------------------------------------------------- |
| **Optimistic Updates**  | Trigger UI changes (e.g., liking a post) immediately, rolling back only on server failure.           |
| **Error Boundaries**    | Wrap critical widgets in Error Boundaries to prevent a single component crash from breaking the app. |
| **Compound Components** | Build the `Post` and `DashboardCard` components using the Compound Pattern for maximum flexibility.  |
| **RBAC (Role Control)** | Implement a `ProtectedRoute` and a `CanAccess` helper to restrict UI based on user roles.            |
| **URL-State Sync**      | Mirror search queries and filter selections in the URL using `react-router-dom` (useSearchParams).   |

---

## 8. Quality & Reliability (Expert Standards)

| Strategy              | Implementation                                                                                       |
| :-------------------- | :--------------------------------------------------------------------------------------------------- |
| **Unit Testing**      | Testing custom hooks (`useDebounce`, `useThrottle`) and utility functions using **Vitest**.          |
| **Component Testing** | Verifying UI behavior of shared components (e.g., `Button`, `Input`) with **React Testing Library**. |
| **Data Validation**   | Schema-based validation for all API responses and form inputs using **Zod**.                         |
| **API Safety**        | Handling API errors gracefully with a unified error-handling service/hook.                           |

---

## 9. Development Roadmap

### Phase 1: Foundation

- [ ] Implement `useOnlineStatus` and `useLocalStorage`.
- [ ] Create basic Layout with Sidebar and Header.
- [ ] Setup `PostService` with `AbortController` support.

### Phase 2: Content Feed & Infinite Logic

- [ ] Implement `useDebounce` and sync it with `URLSearchParams`.
- [ ] Build `PostCard` with `Skeleton` shimmer effects.
- [ ] Integrate `useIntersectionObserver` for infinite scroll.

### Phase 3: Analytics Dashboard

- [ ] Build Bento Grid layout with `useThrottle` for metric simulation.
- [ ] Add `useClickOutside` for interactive menus and popovers.
- [ ] Implement **Error Boundaries** for individual chart widgets.

### Phase 4: Quality, Security & Polish

- [ ] Setup **Vitest** and write tests for all custom hooks.
- [ ] Integrate **Zod** for API response validation and form schemas.
- [ ] Implement **Optimistic Updates** for social actions.
- [ ] Setup **RBAC** and final UI/UX polish.

---

_Stay Senior. Build Pulse._
