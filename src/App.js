import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tentang from './pages/Tentang';
import Footer from './components/Footer';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
