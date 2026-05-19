import PaginaLayout from "../components/PaginaLayout";
import TabelaGenerica from "../components/TabelaGenerica";
import '../components/PaginaLayout.css';

function Faltas() {
    const faltas20261 = [
        { disciplina: "BI e Data Warehousing", faltas: "0", presenca: "100%" },
        { disciplina: "Construção de Frontend", faltas: "0", presenca: "100%" },
        { disciplina: "Manutenção de Software e DevOps", faltas: "0", presenca: "100%" }
    ];

    const faltas20252 = [
        { disciplina: "BI e Data Warehousing", faltas: "0", presenca: "100%" },
        { disciplina: "Construção de Frontend", faltas: "0", presenca: "100%" },
        { disciplina: "Manutenção de Software e DevOps", faltas: "0", presenca: "100%" }
    ];

    return (
        <PaginaLayout titulo="Minhas Faltas">
            <h2>Histórico de Faltas por Semestre</h2>

            <TabelaGenerica 
                legenda="2026.1"
                colunas={["Disciplina", "Total de Faltas", "% de Presença"]}
                dados={faltas20261}
            />

            <TabelaGenerica 
                legenda="2025.2"
                colunas={["Disciplina", "Total de Faltas", "% de Presença"]}
                dados={faltas20252}
            />
        </PaginaLayout>
    );
}

export default Faltas;