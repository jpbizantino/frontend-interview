/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string
  readonly VITE_POLLING_INTERVAL_MIN: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
