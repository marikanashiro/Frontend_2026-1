import "./App.css";
import Dashboard from "../src/pages/Dashboard";
import Faltas from "../src/pages/Faltas";
import Notas from "../src/pages/Notas";
import Boletos from "../src/pages/Boletos";
import Requerimentos from "../src/pages/Requerimentos";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../src/layouts/Layout";
import { useAuth } from "./hooks/useAuth";
import Login from "./pages/Login";

function App() {
  const { autenticado } = useAuth();

  return (
    <Routes>
      {!autenticado ? (
        <Route path="/*" element={<Login />} />
      ) : (
        <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
