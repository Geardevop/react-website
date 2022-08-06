
import './App.css';
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="About" element={<About />} />
      </Routes>
    </>
  );
}

const Landing = () => {
  return(
    <div>
      <p>Landing page</p>
    </div>
  )
}

const About = () => {
  return(
    <div>
      <p>About page</p>
    </div>
  )
}

export default App;
