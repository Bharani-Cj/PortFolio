import { About } from './components/About';
import { ContactMe } from './components/ContactMe';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Project } from './components/Project';
import { useState } from 'react';
import { ThemeSwitcher } from './components/ThemeSwitcher';
export default function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={theme ? 'theme theme-dark' : 'theme'}>
      <Navigation />
      <Home />
      <About />
      <Project />
      <ContactMe />
      <Footer />
      <ThemeSwitcher setTheme={setTheme} theme={theme} />
    </div>
  );
}
function Navigation() {
  return (
    <nav className="nav">
      <h3>Cj.dev</h3>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
