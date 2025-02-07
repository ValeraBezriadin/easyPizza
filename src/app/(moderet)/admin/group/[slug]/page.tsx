import { collection, getDocs } from "firebase/firestore";
import { notFound } from "next/navigation";
import { db } from "@/assets/firebaseApi";
import { IParams } from "@/utils/types";
import AdminGroupItems from "@/components/admin/AdminGroupItems";

async function fetchCollectionIDs(collectionName: string): Promise<string[]> {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => doc.id);
}

export async function generateStaticParams() {
  const list = await fetchCollectionIDs("categories");
  console.log("Generated static params:", list);

  return list.map((id) => ({
    slug: id,
  }));
}

export default async function DynamicGroup({ params }: { params: IParams }) {
  const slug = params.slug;

  const list = await fetchCollectionIDs("categories");

  console.log("list", list);
  if (!list.includes(slug)) {
    notFound();
  } else {
  }

  return (
    <div>
      <h1>Category: {slug}</h1>
      <AdminGroupItems slug={slug} />
    </div>
  );
}
