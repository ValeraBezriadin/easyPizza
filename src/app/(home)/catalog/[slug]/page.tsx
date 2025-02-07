import { collection, getDocs } from "firebase/firestore";
import { notFound } from "next/navigation"; // Import for triggering 404
import { db } from "@/assets/firebaseApi";
import { IParams } from "@/utils/types";

export async function generateStaticParams() {
  const collectionRef = collection(db, "categories");
  const querySnapshot = await getDocs(collectionRef);

  const list = querySnapshot.docs.map((doc) => doc.id);
  console.log("list", list);

  return list.map((id) => ({
    slug: id,
  }));
}

export default async function CatalogPage({ params }: { params: IParams }) {
  const { slug } = params;
  const collectionRef = collection(db, "categories");
  const querySnapshot = await getDocs(collectionRef);
  const list = querySnapshot.docs.map((doc) => doc.id);

  if (!list.includes(slug)) {
    notFound();
  }

  return (
    <div>
      <h1>{slug}</h1>
      <p>Displaying content for: {slug}</p>
    </div>
  );
}
