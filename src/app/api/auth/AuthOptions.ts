import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { UserHelper } from "../services/helpers/user";

const user = new UserHelper();

export const authOptions: NextAuthOptions = {
  providers: [
    // CredentialsProvider implemented only for testing environment
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "johndoe@example.com",
        },
      },
      async authorize(credentials, req) {
        // Checking if email exists in db

        const userEmail: string = credentials?.email as string;
        const userData = await user.GetUserID(userEmail);

        if (userData) {
          // User found

          const userDataToSend = {
            id: userData.id,
            name: userData.user_name,
            email: userData.user_email,
          };

          return userDataToSend;
        } else {
          // User not found
          return null;
        }
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

  // session: {
  //   strategy: "jwt",
  // },

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
          await user.CreateUser(
            profile.email as string,
            profile.name as string
          );
          return true;
        }
      }

      return true;
    },
    async session({ session, token }) {
      // call database to get user id
      if (session.user.email) {
        const response = await user.GetUserID(session.user.email);
        session.user.id = response?.id;
      }

      return session;
    },
  },
};
