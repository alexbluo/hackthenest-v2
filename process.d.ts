declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    ADMIN_PASSWORD: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    POSTMARK_API_TOKEN: string;
    DATABASE_URL: string;
    SHADOW_DATABASE_URL: string;
  }
}
