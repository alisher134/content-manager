export const manageLocalStorage = {
  setItem: (key: string, value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: <T>(key: string, defaultValue?: T): T | null => {
    const value = localStorage.getItem(key);

    if (value === null) return defaultValue ?? null;

    try {
      return JSON.parse(value) as T;
    } catch {
      return defaultValue ?? null;
    }
  },
  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  },
  clear: (): void => {
    localStorage.clear();
  },
};
