import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Nosotros from "../components/Nosotros";
import Menu from "../components/Menu";
import Reservas from "../components/Reservas";
import Horarios from "../components/Horarios";
import MenuContextProvider from "../context/MenuContextProvider";
import Layout from "../components/Layout";
import TakeAway from "../components/TakeAway";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="nosotros" element={<Nosotros />} />
              <Route path="menu" element={<Menu />} />
              <Route path="reservas" element={<Reservas />} />
              <Route path="horarios" element={<Horarios />} />
              <Route path="takeaway" element={<TakeAway />} />
            </Routes>
          </Layout>
        </MenuContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
