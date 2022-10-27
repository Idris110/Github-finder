import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import Footer from '../src/components/layout/Footer';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <BrowserRouter>
        <Navbar title={'GitHub Finder'} />
        
        <Routes>
          <Route exact path='/' element={<Home/>} />  
          <Route path='/about' element={<About/>} />
          <Route path='/*' element={<NotFound/>} />

        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
