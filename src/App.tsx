import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./components/Layout"
import './index.scss'
import Home from "./pages/Home"
import About from "./pages/About"
import ContactPage from "./pages/Contact"

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes"

const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<div>Projects</div>}/>
            <Route path="/contact" element={<ContactPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App