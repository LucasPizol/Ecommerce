import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Auth from "./pages/Auth/Auth";
export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
