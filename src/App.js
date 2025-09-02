import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SingleArticle from './components/SingleArticle';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className='App d-flex f-column'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/article/:id' element={<SingleArticle />} />
          {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
