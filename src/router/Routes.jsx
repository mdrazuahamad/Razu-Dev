import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../App";
import Portfolio from "../sections/Portfolio";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
