import './App.css';
import FirstDesign from './components/FirstDesign';
import Fourth from './components/Fourth';
import SecondDesign from './components/SecondDesign';
import Third from './components/Third';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dummy from './components/Dummy';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstDesign />} />
          <Route path='/second' element={<SecondDesign />} />
          <Route path='/dumy' element={<Dummy />} />
          <Route path='/review' element={<Third />} />
          <Route path='/4th-page' element={<Fourth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
