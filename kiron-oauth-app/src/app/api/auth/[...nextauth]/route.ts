import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      wellKnown: "https://accounts.google.com/.well-known/openid-configuration"
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
