import { About } from './components/About';
import { ContactMe } from './components/ContactMe';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Project } from './components/Project';
import { useState } from 'react';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Navigation } from './Navigation';
export default function App() {
  const [theme, setTheme] = useState(true);

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
