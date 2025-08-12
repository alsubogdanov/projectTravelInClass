import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
