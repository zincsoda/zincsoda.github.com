import { Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Projects from './pages/Projects'
import DevRandom from './pages/DevRandom'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/public" element={<Navigate to="/bio" replace />} />
        <Route path="/dev/random" element={<DevRandom />} />
      </Route>
    </Routes>
  )
}
