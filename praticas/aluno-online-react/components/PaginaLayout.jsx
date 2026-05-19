import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import './PaginaLayout.css';

function PaginaLayout({ titulo, children }) {
    return (
        <div className="constante">
            <Sidebar />
            <main>
                <Topbar titulo={titulo} />
                {children}
            </main>
        </div>
    );
}

export default PaginaLayout;