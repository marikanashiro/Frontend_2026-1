import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";


export function AuthProvider({ children }) {
    const [autenticado, setAutenticado] = useState(false);
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const usuarioSalvo = localStorage.getItem("usuario");
        if (usuarioSalvo) {
            setUsuario(JSON.parse(usuarioSalvo));
            setAutenticado(true);
        }
    }, []);

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