"use client";
import fetchGroups from "@/store/useFetchGroups";
import { IColection } from "@/utils/colection";
import { useState, useEffect } from "react";

const AdminGroupItems = ({ slug }: { slug: string }) => {
  const { itemOfGroup } = fetchGroups();
  const [item, setItem] = useState<IColection | null>(null);

  useEffect(() => {
    itemOfGroup(slug).then((data) => {
      console.log("item data", data);
      setItem(data);
    });
  }, [slug]);

  if (!item) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{item.groupName}</h1>
    </div>
  );
};

export default AdminGroupItems;
