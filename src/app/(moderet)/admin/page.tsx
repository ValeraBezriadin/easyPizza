"use client";
import { app } from "@/assets/firebaseApi";
import css from "./style.module.css";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminPopUp from "@/components/admin/AdminPopUp";
import AdminAddGroup from "@/components/admin/AdminAddGroup";

import AdminGroups from "@/components/admin/AdminGroups";

const Admin = () => {
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const [isOpenAddGroup, setIsOpenAddGroup] = useState(false);
  const [isDeleteModeGroup, setisDeleteModeGroup] = useState(false);

  const handleAddGroup = () => {
    setIsOpenAddGroup((prev) => !prev);
  };
  const handleDelete = () => {
    setisDeleteModeGroup((prev) => !prev);
    console.log("delete");
  };
  console.log("loading", loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={css.admin__interect}>
        <button className={css.admin__item} onClick={handleAddGroup}>
          Add group
        </button>
        <button className={css.admin__item} onClick={handleDelete}>
          Delete group
        </button>
      </div>
      <AdminGroups loading={loading} deleteMode={isDeleteModeGroup} />
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
