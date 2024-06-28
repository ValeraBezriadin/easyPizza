"use client";
import { app } from "@/assets/firebaseApi";
import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Admin = () => {
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <div>loadding</div>;
  }
  return <div>Admin{user && user.email}</div>;
};

export default Admin;
