import './App.css';
import CelestialObject from './components/CelestialObject';
import Introduction from './components/Introduction.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='full-display'>
      <Router>
        <Routes>
          <Route path='/' element={<Introduction />} />
          <Route path='/:name' element={<CelestialObject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
