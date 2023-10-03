import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import CityList from "./components/CityList";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList />}></Route>
          <Route path="cities" element={<CityList />}></Route>
          <Route path="countries" element={<p>countries are here</p>}></Route>
          <Route path="form" element={<p>form here</p>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
