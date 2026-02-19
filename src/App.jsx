import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Fun from './pages/Fun'
import Notes from './pages/Notes'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<Bio />} />
        <Route path="/projects" element={<Fun />} />
        <Route path="/notes" element={<Notes />} />
      </Route>
    </Routes>
  )
}
