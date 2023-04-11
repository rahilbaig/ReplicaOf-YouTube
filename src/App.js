import Home from "./component/home";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import About from "./component/about"
import Addvideo from "./component/addvideo"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagenotfound from "./component/pagenotfound";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      {/* common component */}
      <Navbar />
        <Routes>
           {/* home page */}
        <Route path="/" element={<div className="mainpage">
            <Sidebar />
            <Home />
          </div>} />
           {/* about page */}
          <Route path="/about" element={<About/>}/>

           {/* add video page */}
           <Route path="/addvideo" element={<Addvideo/>}/>

           {/*page not found error*/}
           <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;