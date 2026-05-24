import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Projects   from './components/Projects'
import GitHub     from './components/GitHub'
import Education  from './components/Education'
import LeetCode   from './components/LeetCode'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <div style={{ background: '#06060a' }}>
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <GitHub />
      <Education />
      <LeetCode />
      <Contact />
      <Footer />
    </div>
  )
}
