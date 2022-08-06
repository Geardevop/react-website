
import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <><Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
