import PaginaLayout from '../components/PaginaLayout';
import TabelaGenerica from '../components/TabelaGenerica';
import '../components/PaginaLayout.css';

function Requerimentos() {
    const requerimentos = [
        { tipo: "Revisão de Menção", data: "15/12/2025", situacao: "Indeferido" },
        { tipo: "Dispensa de Disciplina", data: "12/06/2025", situacao: "Indeferido" },
        { tipo: "Trancamento de Matrícula", data: "05/01/2024", situacao: "Deferido" },
        { tipo: "Mudança de Turno", data: "10/10/2023", situacao: "Deferido" },
        { tipo: "Renovação de Matrícula", data: "20/02/2023", situacao: "Deferido" }
    ];

    return (
        <PaginaLayout titulo="Meus Requerimentos">
            <h2>Faça solicitações online para a secretaria</h2>
            <TabelaGenerica 
                colunas={["Tpo de Requerimento", "Data de Solicitação", "Situação"]}
                dados={requerimentos}
            />
        </PaginaLayout>
    );
}

export default Requerimentos;