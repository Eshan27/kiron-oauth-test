"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Welcome, {session.user?.name}</h1>
        <p>Email: {session.user?.email}</p>
        <button onClick={() => signOut()} style={{ marginTop: "1rem" }}>
          Sign out
        </button>
      </main>
    );
  }
  return (
    <main style={{ padding: "2rem" }}>
      <h1>You are not signed in</h1>
      <button onClick={() => signIn("google")} style={{ marginTop: "1rem" }}>
        Sign in with Google
      </button>
    </main>
  );
}
