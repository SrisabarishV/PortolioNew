import Navbar from './component/Navbar' // check if folder is 'component' or 'components'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App