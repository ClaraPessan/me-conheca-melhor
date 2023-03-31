import NaoEncontrada from "paginas/NaoEncontrada";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Contato from "./paginas/Contato";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>   
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/*" element={<NaoEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
