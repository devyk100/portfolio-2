import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './components/start'
import Projects from './components/projects'

function App() {
  const [count, setCount] = useState(0)
  // const component = useRef<HTMLDivElement>(null)
  return (
    <main>
      <Start/>
      <Projects />
    </main>
  )
}

export default App
