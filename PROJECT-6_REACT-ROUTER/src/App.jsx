import { BrowserRouter,Route,Router,Routes,RouterProvider } from "react-router-dom"
import Home from "./Component/Home"
import Project from "./Component/Project"
import Service from "./Component/Service"
import Contact from "./Component/Contact"
import Navbar from "./Navbar"
const App=()=>{
return(
  <div>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  </div>
)
}
export default App