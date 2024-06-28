"use client";
import "@/app/globals.css";
import { app } from "@/assets/firebaseApi";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = getAuth(app);

  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/admin/login");
      }
    }
  }, [loading, user]);
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
