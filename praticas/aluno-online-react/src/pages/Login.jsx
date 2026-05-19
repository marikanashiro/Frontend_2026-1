import { useState } from 'react';
import './Login.css';
import Input from '../components/Input';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailErro, setEmailErro] = useState('');
    const [senhaErro, setSenhaErro] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmailErro('');
        setSenhaErro('');

        let isValid = true;

        if (!email.trim()) {
            setEmailErro('O campo de e-mail é obrigatório.');
            isValid = false;
        } else if (!email.includes('@') || !email.includes('.')) {
            setEmailErro('Por favor, insira um e-mail válido.');
            isValid = false;
        }

        if (!senha.trim()) {
            setSenhaErro('O campo senha é obrigatório.');
            isValid = false;
        } else if (senha.length < 6) {
            setSenhaErro('A senha deve ter no mínimo 6 caracteres.');
            isValid = false;
        }

        if (isValid) {
            alert('Login realizado com sucesso!');
        }
    };

    return (
        <div className='login-container'>
            <div className='login-card'>
                <img src='src/assets/learn.svg' alt='Logotipo Aluno Online' className='logo' />
                <h1>Aluno Online</h1>

                <form onSubmit={ handleSubmit }>
                    <Input 
                        label="E-mail"
                        tipo="email"
                        id="email"
                        valor={ email }
                        onChange={(e) => setEmail(e.target.value)}
                        erro={ emailErro }
                    />

                    <Input 
                        label="Senha"
                        tipo="password"
                        id="senha"
                        valor={ senha }
                        onChange={(e) => setSenha(e.target.value)}
                        erro={ senhaErro }
                    />

                    <button type='submit' className='button-entrar'>
                        Entrar
                    </button>
                </form>
            </div>

            <footer className='login-footer'>
                &copy; 2026. Todos os direitos reservados.
            </footer>
        </div>
    );
}

export default Login;