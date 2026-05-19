import Card from '../components/Card';
import PaginaLayout from '../components/PaginaLayout';
import './Dashboard.css';

function Dashboard() {
    return (
        <PaginaLayout titulo="Olá, Aluno!">
            <h2>Bem-vindo ao portal do aluno</h2>
            <Card />
        </PaginaLayout>
    );
}

export default Dashboard;