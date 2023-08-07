import NextAuth from "next-auth";

declare module "next-auth" {
  // Define the additional properties you want to add to the user object
  interface User {
    id?: number; // Adjust the type as needed, based on your database schema
    // Add more properties here if needed
  }

  // Update the Session interface to include your custom properties
  interface Session {
    accessToken: string; // For example, if you're adding an accessToken
    user: User;
    // Add more properties here if needed
  }
}
