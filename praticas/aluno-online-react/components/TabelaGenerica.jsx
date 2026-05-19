function TabelaGenerica({ legenda, colunas, dados }) {
    return (
        <table>
            {legenda && <caption>{legenda}</caption>}

            <thead>
                <tr>
                    {colunas.map((col, index) => (
                        <th key={index}>{col}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {dados.map((linha, linhaIndex) => (
                    <tr key={linhaIndex}>
                        {colunas.map((col, colIndex) => {
                            const chave = col.toLowerCase()
                                .replace(/ r\$/g, '')
                                .replace(/ç/g, 'c')
                                .replace(/\s+/g, '');

                            const valor = linha[chave] || 
                                         linha[col] || 
                                         Object.values(linha)[colIndex] || '';

                            return <td key={colIndex}>{valor}</td>;
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TabelaGenerica;