import react from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default App;
