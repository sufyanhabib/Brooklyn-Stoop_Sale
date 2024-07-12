import './App.css';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sales' element={<Sales />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App
