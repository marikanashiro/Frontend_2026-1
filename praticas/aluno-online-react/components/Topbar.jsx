import './Topbar.css';

function Topbar({titulo}) {
    return (
        <header className='topbar'>
            <h1>{titulo}</h1>
            <img src="../src/assets/avatar.svg" width='64' class='img' alt='Ícone de Avatar'/>
        </header>
    );
}

export default Topbar;