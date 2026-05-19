import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar'>
            <header>
                <img src="../src/assets/learn.svg" alt="Ícone do Aluno Online" />
                <p className="aluno-online-paragrafo">Aluno Online</p>
            </header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/notas">Notas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faltas">Faltas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/boletos">Boletos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/requerimentos">Requerimentos</NavLink>
                    </li>
                    <li>
                        <a href='#' onClick={(e) => {e.preventDefault(); alert("Logout em desenvolvimento.")}}>Sair</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;