import PaginaLayout from '../components/PaginaLayout';
import TabelaGenerica from '../components/TabelaGenerica';
import '../components/PaginaLayout.css';

function Boletos() {
    const boletos = [
        { vencimento: "19/01/2026", valor: "500,00", situacao: "Pago" },
        { vencimento: "19/02/2026", valor: "500,00", situacao: "Em atraso" },
        { vencimento: "19/03/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/04/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/05/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/06/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/07/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/08/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/09/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/10/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/11/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/12/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/01/2027", valor: "500,00", situacao: "A Pagar" }
    ];

    return (
        <PaginaLayout titulo="Meus Boletos">
            <h2>Histórico de Pagamentos</h2>

            <TabelaGenerica 
                colunas={["Vencimento", "Valor R$", "Situação"]}
                dados={boletos}
            />
        </PaginaLayout>
    );
}

export default Boletos;