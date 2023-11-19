import CreateYours from "../../components/HomePage/CreateYours/CreateYours";
import Header from "../../components/HomePage/Header/Header";
import HomeSection from "../../components/HomePage/HomeSection/HomeSection";
import LineSection from "../../components/HomePage/LineSection/LineSection";
import ProductsSection from "../../components/HomePage/ProductsSection/ProductsSection";
import TopPage from "../../components/HomePage/TopPage/TopPage";
import WhyUs from "../../components/HomePage/WhyUs/WhyUs";
import { useQuery } from "react-query";

const getCoffees = async () => {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  return data;
};

const HomePage = () => {
  const { data } = useQuery("coffeesData", getCoffees);

  return (
    <main style={{ overflow: "overlay" }}>
      <Header />
      <HomeSection />
      <TopPage />
      <ProductsSection data={data} />
      <LineSection />
      <CreateYours />
      <WhyUs />
    </main>
  );
};

export default HomePage;
