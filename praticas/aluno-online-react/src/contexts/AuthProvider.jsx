import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
    const usuarioInicial = JSON.parse(localStorage.getItem("usuario") || "null");
    const [autenticado, setAutenticado] = useState(!!usuarioInicial);
    const [usuario, setUsuario] = useState(usuarioInicial);

    const login = (dadosUsuario) => {
        setUsuario(dadosUsuario);
        setAutenticado(true);
        localStorage.setItem("usuario", JSON.stringify(dadosUsuario));
    };

    const logout = () => {
        setUsuario(null);
        setAutenticado(false);
        localStorage.removeItem("usuario");
    };

    return (
        <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}