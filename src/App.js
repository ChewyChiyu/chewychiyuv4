import './App.css';
import Archive from './Pages/Archive';
import Navigation from './Pages/Navigation';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Archive />}></Route>
        <Route path="*" element={<Archive />}></Route>
      </Routes>
    </div>
  );
}

export default App;
