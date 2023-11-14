import Header from "../components/Header/Header";
import HomeSection from "../components/HomeSection/HomeSection";
import LineSection from "../components/LineSection/LineSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import TopPage from "../components/TopPage/TopPage";

const HomePage = () => {
  return (
    <main style={{ overflow: "overlay" }}>
      <Header />
      <HomeSection />
      <TopPage />
      <ProductsSection />
      <LineSection />
    </main>
  );
};

export default HomePage;
