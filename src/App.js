import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import {Gallery} from "./components/Gallery/Gallery";
import {ProvideGallery} from "./useGallery";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <ProvideGallery>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Gallery/>
        <ScrollToTop />
        <Footer />
      </div>
    </ProvideGallery>
  )
}

export default App
