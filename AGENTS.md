# AI Agents Development Guidelines

This document outlines the architectural patterns, coding standards, and development workflows for this project. All AI agents must strictly adhere to these rules to maintain the "Senior-level" quality of the codebase.

## 1. Directory Architecture & Import Boundaries

We follow a modular, feature-based architecture under `src/`. **Strict boundaries** are enforced to prevent circular dependencies and architectural drift:

- **`app/`**: Application-wide providers, global styles, and root `App.tsx`.
- **`pages/`**: View components.
- **`components/`**: Shared UI components.
- **`services/`**: API clients and data fetching logic.
- **`hooks/`**: Global reusable React hooks.
- **`utils/`**: Global utility functions.
- **`types/`**: Global TypeScript interfaces.

### ❗ Import Rules (Critical)

- **`components` → `pages`** is FORBIDDEN. UI components must be pure and agnostic of the page they are on.
- **`hooks` → `components`** is FORBIDDEN. Hooks should manage logic, not UI elements.

## 2. Side-Effects & Data Fetching

- **API Calls**: All external communication must reside in `services/`.
- **No Direct Fetch**: Never use `fetch` or `axios` directly inside a component or a hook. Always use a service.
- **Hooks & Logic**: Hooks should wrap services but never perform raw network operations.

## 3. Component Architecture

Every component (especially complex ones) should follow this structure:

### Folder Structure

- `MyComponent/`
  - `index.ts` (Clean exports)
  - `MyComponent.tsx` (UI/Render logic)
  - `MyComponent.logic.ts` (Optional: Complex business logic/state)
  - `MyComponent.types.ts` (Component-specific interfaces)
  - `MyComponent.variants.ts` (Optional: CVA styles)
  - `MyComponent.helpers.ts` (Optional: Local helper functions)

### UI vs Logic

Separate the "How it looks" from "What it does". If a component has more than 2-3 `useState`/`useEffect` calls, move the logic to a custom hook or `MyComponent.logic.ts`.

## 4. Naming Conventions

- **No Generic Names**: Avoid `helpers.ts`, `utils.ts`, `data.ts` inside feature/component folders.
- **Specific Naming**: Use `SearchBar.helpers.ts` instead of `helpers.ts`. This prevents confusion in global searches and tab navigation.
- **Component Files**: Must be `PascalCase.tsx`.
- **Utilities**: Must be `camelCase.ts`.

## 5. Performance & React Best Practices

- **JSX Functions**: Avoid creating functions inside the JSX body (e.g., `onClick={() => doSomething()}`). Define them outside or use `useCallback`.
- **Optimization**: Use `memo`, `useMemo`, and `useCallback` **consciously**. Do not wrap everything, but use them for heavy computations or to prevent expensive tree re-renders.
- **Re-renders**: Keep state as local as possible to minimize the impact of state changes.

## 6. State Management

- **Local State**: Use `useState` for UI-only state (toggles, inputs).
- **Global State**: Use Context or a state management library (Zustand/Redux) ONLY for truly global data (auth, theme, global settings).
- **URL State**: Prefer storing filter/search params in the URL (via `react-router-dom`) instead of local state for better UX (shareable links).

## 7. Path Aliases

Always use path aliases. Deep relative imports (`../../..`) are strictly forbidden.

- `@app/*`, `@pages/*`, `@components/*`, `@services/*`, `@hooks/*`, `@utils/*`, `@types/*`

## 8. Git, Tooling & Type Safety

### Git Workflow

- **Commit Messages**: Strictly follow **Conventional Commits** (`feat:`, `fix:`, `chore:`, `refactor:`, etc.).
- **Hooks**: Never bypass Husky hooks. All code must pass `lint-staged` before commit.

### Package Management

- **npm Only**: Use only **npm** for dependency management. `package-lock.json` is the source of truth. Using `yarn` or `pnpm` is forbidden.

### TypeScript Strictness

- **Strict Mode**: `strict: true` is non-negotiable.
- **Safety Flags**: Always maintain `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, and `noPropertyAccessFromIndexSignature` to prevent runtime errors.

---

_Failure to follow these rules will result in a linting error or architectural drift. Stay Senior._
