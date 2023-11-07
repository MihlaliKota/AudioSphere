import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Podcast from "./pages/Podcast/Podcast";
import Login from "./pages/Login/Auth";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <div>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/podcast/:id" element={<Podcast />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
