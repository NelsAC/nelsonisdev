import { useState } from 'react';

//Components
import { Header } from './components/Header/Index';
import { Hero } from './components/Hero/Index';
import { About } from './components/About/Index';
import { Skills } from './components/Skills/Index';
import { Projects } from './components/Projects/Index';
import { Footer } from './components/Footer/Index';

function Portfolio() {

  const [darkMode, setDarkMode] = useState(false);      

  return (
    <>
    <Header mode={darkMode} setMode={setDarkMode} />
    <Hero mode={darkMode} />
    <About mode={darkMode} />
    <Skills mode={darkMode} />
    <Projects mode={darkMode} />
    <Footer mode={darkMode} />
    </>
  );
}

export default Portfolio;
