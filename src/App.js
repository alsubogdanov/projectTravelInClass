import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App d-flex f-column">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<SingleArticle />} />
          {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
