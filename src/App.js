import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FirstDesign from './components/Home';
import Fourth from './components/Fourth';
import Verb from './components/Verb';
import SecondDesign from './components/SecondDesign';
import Third from './components/Third';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Coffey from './components/Coffey';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstDesign />} />
          <Route path='/second' element={<SecondDesign />} />
          <Route path='/coffey' element={<Coffey />} />
          <Route path='/review' element={<Third />} />
          <Route path='/4th-page' element={<Fourth />} />
          <Route path='/verb' element={<Verb />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
