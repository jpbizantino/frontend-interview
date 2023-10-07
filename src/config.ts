export const API_URL =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:8081'

export const POLLING_INTERVAL_MIN =
  Number(import.meta.env.VITE_POLLING_INTERVAL_MIN) || 2
