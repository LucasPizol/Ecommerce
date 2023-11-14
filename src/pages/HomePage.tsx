import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import HomeSection from "../components/HomeSection/HomeSection";
import LineSection from "../components/LineSection/LineSection";
import TopPage from "../components/TopPage/TopPage";

const HomePage = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 150 && !showHeader) {
        setShowHeader(true);
      }

      if (window.scrollY < 150 && showHeader) {
        setShowHeader(false);
      }
    });
  }, []);
  return (
    <main style={{ overflow: "overlay" }}>
      <Header showHeader={showHeader} />
      <HomeSection />
      <TopPage />
      <LineSection />
    </main>
  );
};

export default HomePage;
