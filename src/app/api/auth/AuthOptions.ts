import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { UserHelper } from "../services/helpers/user";

const user = new UserHelper();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize(credentials, req) {
        if (credentials?.email && credentials.password === "1234") {
          return {
            id: 2,
            name: credentials.email.substring(0, 5),
            email: credentials.email,
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientSecret: process.env.GOOGLE_SECRET as string,
      clientId: process.env.GOOGLE_CLIENT as string,
    }),
  ],

  pages: {
    signIn: "/user/login",
    signOut: "/user/logged-out",
  },

  callbacks: {
    async signIn({ account, profile, email, credentials }) {
      if (profile) {
        // Check if user exists
        const userEmail: string = profile.email as string;
        const userExist = await user.GetUserID(userEmail);

        // Create a new user if not exists
        if (userExist) {
          return true;
        } else {
          await user.CreateUser(profile.email as string, profile.name as string);
          return true;
        }
      }

      return true;
    },
    async session({ session, token, user }) {
      // call database to get user id
      if (session.user) {
        const response = await fetch(
          `http://localhost:3000/api/user/id?email=${session.user.email}`
        );
        const body = await response.json();

        session.user.id = body.id;
      }

      return session;
    },
  },
};
