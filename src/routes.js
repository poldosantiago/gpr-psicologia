import Inicio from "paginas/inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="*" element={<>página de erro padrão</>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;
