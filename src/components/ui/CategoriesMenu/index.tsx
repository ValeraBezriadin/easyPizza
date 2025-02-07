"use client";
import React, { useEffect } from "react";
import css from "./style.module.css";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import categoriesList from "@/utils/categries";
import useFetchGroups from "@/store/useFetchGroups";
import Image from "next/image";
const CategoriesMenu = () => {
  const { fetchDocumentsId, documentIds, fetchLoading } = useFetchGroups();

  useEffect(() => {
    fetchDocumentsId();
  }, [fetchDocumentsId]);
  console.log("documentIds");
  return (
    <section className={css.menu}>
      <div className="container">
        <ul className={css.menu__list}>
          {fetchLoading ? (
            <div>Loading...</div>
          ) : (
            documentIds.map((i) => (
              <li key={i.id} className={css.menu__item}>
                <Link href={`/catalog/${i.id}`} className={css.menu__link}>
                  <Image alt={i.id} width={24} height={24} src={i.photo} />
                  <span className={css.menu__text}>{i.id}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default CategoriesMenu;
