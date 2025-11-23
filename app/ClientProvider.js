// frontend/app/ClientProvider.js
"use client";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";

export default function ClientProvider({ children, session }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      {children}
    </SessionProvider>
  );
}
