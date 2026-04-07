import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Boletos.css';

function Boletos() {
    return (
        <div className='constante'>
            <Sidebar />

            <main>
                <Topbar titulo="Meus Boletos"/>

                <h2>Histórico de Pagamentos</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Vencimento</th>
                            <th>Valor R$</th>
                            <th>Situação</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>19/01/2026</td>
                            <td>500,00</td>
                            <td>Pago</td>
                        </tr>

                        <tr>
                            <td>19/02/2026</td>
                            <td>500,00</td>
                            <td>Em atraso</td>
                        </tr>

                        <tr>
                            <td>19/03/2026</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>

                        <tr>
                            <td>19/04/2026</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>

                        <tr>
                            <td>19/05/2026</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>

                        <tr>
                            <td>19/06/2026</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>

                        <tr>
                            <td>19/07/2026</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>

                        <tr>
                            <td>19/08/2026</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>

                        <tr>
                            <td>19/09/2026</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>

                        <tr>
                            <td>19/10/2026</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>

                        <tr>
                            <td>19/11/2026</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>

                        <tr>
                            <td>19/12/2026</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>

                        <tr>
                            <td>19/01/2027</td>
                            <td>500,00</td>
                            <td>A Pagar</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Boletos;