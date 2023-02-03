/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    BASE_URL: string = 'http://localhost:3000/users'
  }
}