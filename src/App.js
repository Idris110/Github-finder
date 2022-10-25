import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <BrowserRouter>
        <Navbar title={'GitHub Finder'} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='text-xl'>
                  Hello work
                </div>
                <div className='btn'>
                  click me
                </div>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
