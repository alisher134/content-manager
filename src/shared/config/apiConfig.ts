interface EnvConfig {
  apiBaseUrl: string;
}

export const envConfig: EnvConfig = {
  apiBaseUrl: String(import.meta.env['VITE_API_URL']),
} as const;
