import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Bio from './pages/Bio'
import DevRandom from './pages/DevRandom'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<Bio />} />
        <Route path="/dev/random" element={<DevRandom />} />
      </Route>
    </Routes>
  )
}
