import CreateYours from "../components/CreateYours/CreateYours";
import Header from "../components/Header/Header";
import HomeSection from "../components/HomeSection/HomeSection";
import LineSection from "../components/LineSection/LineSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import TopPage from "../components/TopPage/TopPage";
import WhyUs from "../components/WhyUs/WhyUs";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <main style={{ overflow: "overlay" }}>
      <Header />
      <HomeSection />
      <TopPage />
      <ProductsSection />
      <CreateYours />
      <LineSection />
      <WhyUs />
      <img className={styles.image} src="/coffee-cup copy.svg" />
    </main>
  );
};

export default HomePage;
