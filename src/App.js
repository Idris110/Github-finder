import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import Footer from '../src/components/layout/Footer';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <BrowserRouter>
        <Navbar title={'GitHub Finder'} />
        <Routes>
          <Route
            path="/"
            element={
              <div className='text-xl'>
                Hello work
              </div>
            }
          ></Route>


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
