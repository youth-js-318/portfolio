import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./components/Layout"
import './index.scss'
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<div>Projects</div>}/>
            <Route path="/contact" element={<div>Contact</div>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App