import "./App.css";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import ShowCarousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div>
      <Header />
      <ShowCarousel />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
