import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFoundPage } from "./pages"

import "./App.css"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-main-bg">
        {/* Navbar */}
        <div className="fixed top-0 bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>

        {/* Routes */}
        <div className="my-4">
          <Routes>
            {/* Pages */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
