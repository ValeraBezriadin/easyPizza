"use client";
import { app } from "@/assets/firebaseApi";
import css from "./style.module.css";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminPopUp from "@/components/admin/AdminPopUp";
import AdminAddGroup from "@/components/admin/AdminAddGroup";
import useFetchGroups from "@/store/useFetchGroups";

const Admin = () => {
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const [isOpenAddGroup, setIsOpenAddGroup] = useState(false);
  const { collections, fetchGroups, fetchLoading } = useFetchGroups();

  const handleLogOut = () => {
    signOut(auth);
  };

  const handleAddGroup = () => {
    setIsOpenAddGroup((prev) => !prev);
  };

  useEffect(() => {
    if (!loading) {
      fetchGroups();
    }
  }, [loading]);
  console.log("products", collections);
  console.log("products", fetchLoading);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={css.admin}>
        <div className="container">
          <div className={css.admin__inner}>
            Admin name: {user && user.email}{" "}
            <button className={css.admin__logOut} onClick={handleLogOut}>
              Log out{" "}
            </button>
          </div>
          <div className={css.admin__list}>
            <button className={css.admin__item} onClick={handleAddGroup}>
              Add group
            </button>
          </div>
          <div>
            {!fetchLoading ? (
              collections?.map((i) => (
                <h1 key={i.groupName}>{i.groupDescription}</h1>
              ))
            ) : (
              <h1>Loading....</h1>
            )}
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
