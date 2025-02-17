// Base path for GitHub Pages deployment
export const BASE_PATH = "/gccp-qa-platform";

// API paths
export const API_PATHS = {
  QUESTIONS: "/api/questions",
  SEARCH: "/api/search",
} as const;

// Ensure paths are prefixed correctly in development and production
export function getApiPath(path: string): string {
  return process.env.NODE_ENV === "development" ? path : `${BASE_PATH}${path}`;
}
