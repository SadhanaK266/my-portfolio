import './App.css'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Experience } from './components/experience/Experience'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
