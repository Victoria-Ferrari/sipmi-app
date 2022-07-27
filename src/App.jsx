import { Routes, Route } from "react-router-dom";

/* pages */
import { Breweries } from "./pages/Breweries/Breweries";
import { Beers } from "./pages/Beer/Beers"
import { Beer } from "./pages/Beer/Beer"
import { Brewery } from "./pages/Breweries/Brewery"
import { Type } from "./pages/Type"

/* components */
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
/* css */
import './App.css'

export const App = () => {
  return (      
    <>
      {/* Routes app */}
      <Routes>
        <Route path="/" element={<Breweries />} />
        <Route path="/beers" element={<Beers />} />  
        <Route path="/beer/:id" element={<Beer />} />
        <Route path="/brewery/:id" element={<Brewery />} /> 
        <Route path="/type/:id" element={<Type />} />
        <Route path="*" element={<p>Page not found!</p>} />
      </Routes>
      
      <Navbar/>
    </>
  );
};
