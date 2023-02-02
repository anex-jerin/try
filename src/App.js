
import Main from './components/Main';
import Layout from './components/Layout';
import About from './components/About';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to='/home' replace />} />
            <Route path='/home' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Navigate to='/home' replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
