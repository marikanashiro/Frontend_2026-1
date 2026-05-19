import PaginaLayout from '../components/PaginaLayout';
import TabelaGenerica from '../components/TabelaGenerica';
import '../components/PaginaLayout.css';

function Notas() {
    const notas20261 = [
        { disciplina: "BI e Data Warehousing", a1: "", a2: "", a3: "", mencao: "SR" },
        { disciplina: "Construção de Frontend", a1: "", a2: "", a3: "", mencao: "SR" },
        { disciplina: "Manutenção de Software e Devops", a1: "", a2: "", a3: "", mencao: "SR" }
    ];

    const notas20252 = [
        { disciplina: "Construção de Backend", a1: "5.4", a2: "6.2", a3: "", mencao: "MM" },
        { disciplina: "Estrutura de Dados", a1: "6.3", a2: "6.1", a3: "", mencao: "MM" },
        { disciplina: "Gerenciamento de Projetos", a1: "7.4", a2: "7.1", a3: "", mencao: "MS" }
    ];

    return (
        <PaginaLayout titulo="Minhas notas">
            <h2>Histórico de Notas por Semestre</h2>

            <TabelaGenerica 
                legenda="2026.1"
                colunas={["Disciplina", "A1", "A2", "A3", "Menção"]}
                dados={notas20261}
            />

            <TabelaGenerica 
                legenda="2025.2"
                colunas={["Disciplina", "A1", "A2", "A3", "Menção"]}
                dados={notas20252}
            />
        </PaginaLayout>
    );
}

export default Notas;