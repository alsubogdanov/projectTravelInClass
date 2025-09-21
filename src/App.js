import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SingleArticle from './components/SingleArticle';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import BlogPage from './components/BlogPage';
import Counter from './components/Counter';
import SearchOverlay from './components/SearchOverlay';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';
import FAQPage from './components/FAQPage';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/AdminDashboard';

function App() {
	const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  return (
    <div className='App d-flex f-column'>
      <Header onSearchClick={()=>setIsOverlayOpen(true)}/>
      <main>
			<ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home />} />
			  <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={
            <ProtectedRoute><AdminDashboard /></ProtectedRoute>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
			 <Route path='/blog' element={<BlogPage />} />
          <Route path='/gallery' element={<Gallery />} />
			 <Route path='/faq' element={<FAQPage />} />
			 <Route path='/test' element={<Counter />} />
          <Route path='/article/:id' element={<SingleArticle />} />
          {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>
		<SearchOverlay
			isOpen={isOverlayOpen}
			onClose={()=>setIsOverlayOpen(false)}
		/>

      <Footer />
    </div>
  );
}

export default App;
