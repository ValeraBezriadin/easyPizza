import CategoriesMenu from "@/components/ui/CategoriesMenu";
import Products from "@/components/ui/Products";
import { pizzaItems, sushiItems } from "@/utils/productsItem";

export default function Home() {
  return (
    <main className="main">
      <CategoriesMenu />
      <Products title="Pizza" data={pizzaItems} />
      <Products title="Sushi" data={sushiItems} />
    </main>
  );
}
