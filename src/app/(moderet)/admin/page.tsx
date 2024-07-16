"use client";
import { app } from "@/assets/firebaseApi";
import css from "./style.module.css";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminPopUp from "@/components/admin/AdminPopUp";
import AdminAddGroup from "@/components/admin/AdminAddGroup";

const Admin = () => {
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const [isOpenAddGroup, setIsOpenAddGroup] = useState(false);

  if (loading) {
    return <div>loadding</div>;
  }
  const handleLogOut = () => {
    signOut(auth);
  };
  const handleAddGroup = () => {
    setIsOpenAddGroup((prev) => !prev);
  };
  return (
    <>
      <div className={css.admin}>
        <div className="container">
          <div className={css.admin__inner}>
            Admin name: {user && user.email}{" "}
            <button className={css.amin__logOut} onClick={handleLogOut}>
              Log out{" "}
            </button>
          </div>
          <div className={css.admin__list}>
            <button className={css.admin__item} onClick={handleAddGroup}>
              Add group
            </button>
          </div>
        </div>
      </div>
      <AdminPopUp
        activePopup={isOpenAddGroup}
        setActivePopup={setIsOpenAddGroup}
      >
        <AdminAddGroup />
      </AdminPopUp>
    </>
  );
};

export default Admin;
