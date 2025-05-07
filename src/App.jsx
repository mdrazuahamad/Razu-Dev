import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/portfolio' element={<PortfolioPage />} />
  </Routes>
);
export default App;
