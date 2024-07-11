import Banner from "@/components/home/Banner";
import ProductsBox from "@/components/home/ProductsBox";
import NavList from "@/components/NavList";
import ProductionHighlight from "@/components/ProductionHighlight";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <NavList />
      <ProductsBox></ProductsBox>
      <ProductionHighlight />
      <div className="h-20"></div>
    </main>
  );
}
