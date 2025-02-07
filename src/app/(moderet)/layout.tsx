"use client";
import "@/app/globals.css";
import { app } from "@/assets/firebaseApi";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import css from "./style.module.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = getAuth(app);
  const handleLogOut = () => {
    signOut(auth);
  };
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
      <main className="main">
        <div className={css.admin}>
          <div className="container">
            <div className={css.admin__inner}>
              Admin name: {user && user.email}{" "}
              <button className={css.admin__logOut} onClick={handleLogOut}>
                Log out{" "}
              </button>
            </div>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
