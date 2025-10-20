
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./componentes";


const AppRoutes = () => {

  return (
    <BrowserRouter>
    <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;