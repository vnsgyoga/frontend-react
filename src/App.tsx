import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { Orders, Customers, Products } from "./pages";

import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">
          {/* Navbar */}
          <div className="dark:bg-main-bg bg-main-bg min-h-screen w-full md:ml-72">
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* Routes */}
            <div>
              <Routes>
                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Products />} />
                <Route path="/customers" element={<Customers />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
