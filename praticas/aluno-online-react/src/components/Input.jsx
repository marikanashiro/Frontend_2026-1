import './Input.css';

function Input({ label, tipo, id, valor, onChange, erro }) {
    return (
        <div className='input'>
            <label htmlFor={ id }>{ label }</label>
            <input 
                type={ tipo }
                id={ id }
                value={ valor }
                onChange={ onChange }
                className={ erro ? 'input-erro' : '' }
            />
            { erro && <p className='mensagem-erro'>{ erro }</p>}
        </div>
    );
}

export default Input;