import react from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Nav />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
