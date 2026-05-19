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
                    <li>Dashboard</li>
                    <li>Notas</li>
                    <li>Faltas</li>
                    <li>Boletos</li>
                    <li>Requerimentos</li>
                    <li>Sair</li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;