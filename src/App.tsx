import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Main from './components/main/MainComponent';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Video from './components/video/Video';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// https://www.anwita-arun.in/
function App() {
  return (
    <div className="px-10 pt-5 sm:px-20 xl:px-40">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/nav" element={<Navbar />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
