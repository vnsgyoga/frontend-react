import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFoundPage } from "./pages"

import "./App.css"
import Home from "./pages/Home"
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-screen bg-red relative">
        <Header />
        {/* Routes */}
        <Routes>
          {/* Pages */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
