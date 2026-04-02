import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignUpPage";
import BrowsePage from "./components/BrowsePage";
import KidDetailPage from "./components/KidDetailPage";
import Header from "./components/Header";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/login"
          element={<LoginPage setUserName={setUserName} />}
        />
        <Route
          path="/signup"
          element={<SignupPage setUserName={setUserName} />}
        />
        <Route path="/browse" element={<BrowsePage userName={userName} />} />
        <Route path="/kid/:id" element={<KidDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
