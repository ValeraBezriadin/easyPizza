import { useEffect } from "react";
import css from "./style.module.css";
import useFetchGroups from "@/store/useFetchGroups";
import Image from "next/image";
import Link from "next/link";
import deleteImg from "@/static/delete.png";

interface IAdminGroups {
  loading: boolean;
  deleteMode: boolean;
}

const AdminGroups = ({ loading, deleteMode }: IAdminGroups) => {
  const { collections, fetchGroups, fetchLoading, deleteGroup } =
    useFetchGroups();

  const handleDelete = (groupId: string) => {
    deleteGroup(groupId);
  };

  useEffect(() => {
    if (!loading) {
      fetchGroups();
    }
  }, [loading, fetchGroups]);
  console.log(
    "link to image",
    collections?.map((i) => console.log(i.groupPhoto))
  );

  return (
    <ul className={css.groups__grid}>
      {!fetchLoading ? (
        collections && collections.length > 0 ? (
          collections.map((i) => (
            <li key={i.groupName} className={css.groups__item}>
              <Link
                href={`/admin/group/${i.groupName}`}
                className={css.groups__link}
              >
                <Image
                  src={i.groupPhoto}
                  className={css.groups__image}
                  alt={i.groupName}
                  width={150}
                  height={150}
                />
                <h3 className={css.groups__title}>{i.groupName}</h3>
                <p className={css.groups__description}>{i.groupDescription}</p>
              </Link>
              {deleteMode ? (
                <button
                  className={css.groups__delete}
                  onClick={() => handleDelete(i.groupName)}
                >
                  <Image
                    src={deleteImg}
                    alt="delete image"
                    className={css.groups__deleteImg}
                    width={28}
                    height={28}
                  />
                </button>
              ) : null}
            </li>
          ))
        ) : (
          <h1>No content available</h1>
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </ul>
  );
};

export default AdminGroups;
