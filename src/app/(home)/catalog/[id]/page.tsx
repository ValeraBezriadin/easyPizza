"use client";
import CategoriesMenu from "@/components/ui/CategoriesMenu";
import React from "react";
import { useParams } from "next/navigation";
import { IParams } from "@/utils/types";
const CatalogPage = () => {
  const params = useParams<IParams>();
  console.log(params);

  return (
    <main className="main">
      <CategoriesMenu />
      CatalogPage{params.id}
    </main>
  );
};

export default CatalogPage;
