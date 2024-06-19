import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navv from './pages/Navv';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Read from './pages/Read';
import Update from './pages/Update';
import Read2 from './pages/Read2';
import Update2 from './pages/Update2';


function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/navv' element={<Navv />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route exact path='/read' element={<Read />} />
          <Route path="/update" element={<Update />}/>
          <Route exact path='/read2' element={<Read2 />} />
          <Route path="/update2" element={<Update2 />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
