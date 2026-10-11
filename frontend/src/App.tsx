import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import CarPage from "./pages/car.page";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:id" element={<CarPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
