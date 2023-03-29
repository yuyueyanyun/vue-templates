/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VUE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}