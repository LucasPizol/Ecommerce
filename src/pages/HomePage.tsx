import Header from "../components/Header/Header";
import HomeSection from "../components/HomeSection/HomeSection";
import LineSection from "../components/LineSection/LineSection";
import TopPage from "../components/TopPage/TopPage";

const HomePage = () => {
  return (
    <main style={{ overflow: "overlay" }}>
      <Header />
      <HomeSection />
      <TopPage />
      <LineSection />
    </main>
  );
};

export default HomePage;
