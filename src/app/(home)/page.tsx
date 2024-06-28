import CategoriesMenu from "@/components/ui/CategoriesMenu";
import Products from "@/components/ui/Products";
import { pizzaItems, sushiItems } from "@/utils/productsItem";

export default function Home() {
  console.log("dfsdaf", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

  return (
    <main className="main">
      <CategoriesMenu />
      <Products title="Pizza" data={pizzaItems} />
      <Products title="Sushi" data={sushiItems} />
    </main>
  );
}
