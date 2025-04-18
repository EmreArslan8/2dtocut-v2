import { User } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    tokens: JWT;
    roles: Array<string>;
  }

  interface Session extends DefaultSession {
    user: User;
    idToken: string;
    accessToken: string;
  }
}
