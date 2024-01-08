import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Paginas/Produtos";
import Servicos from "Paginas/Servicos";
import Projetos from "Paginas/Projetos";
import Suporte from "Paginas/Suporte";
import SobreNos from "./Paginas/SobreNos";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Paginas/Produto";
import NaoEncontrada from "Paginas/NaoEncontrada";
import Login from "Paginas/Login";
import Inicio from "Paginas/Inicio";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="suporte" element={<Suporte />} />
          <Route path="sobrenos" element={<SobreNos />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
