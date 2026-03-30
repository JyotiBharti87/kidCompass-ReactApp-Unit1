import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignUpPage";
import BrowsePage from "./components/BrowsePage";
import KidDetailPage from "./components/KidDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/kid/:id" element={<KidDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
