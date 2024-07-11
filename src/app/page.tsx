import Banner from "@/components/home/Banner";
import NavList from "@/components/NavList";
import ProductionHighlight from "@/components/ProductionHighlight";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <NavList />
      <ProductionHighlight />
    </main>
  );
}
