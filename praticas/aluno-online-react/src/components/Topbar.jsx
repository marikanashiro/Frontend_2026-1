import { useAuth } from '../hooks/useAuth';
import './Topbar.css';

function Topbar({ titulo }) {
    const { usuario } = useAuth();

    return (
        <header className='topbar'>
            <h1>{titulo}</h1>
            <div className='topbar-user'>
                <img src="../src/assets/avatar.svg" alt='Ícone de Avatar' />
                <span>{usuario?.email}</span>
            </div>
        </header>
    );
}

export default Topbar;