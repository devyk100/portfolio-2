import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './components/start'
import Projects from './components/projects'
import Experience from './components/experience'

function App() {
  const [count, setCount] = useState(0)
  // const component = useRef<HTMLDivElement>(null)
  return (
    <main>
        <Start/>
        <Projects />
      <Experience />
    </main>
  )
}

export default App
