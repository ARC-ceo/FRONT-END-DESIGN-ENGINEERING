import React from "react"
import "./comp.page.css"


type BotaoProps = { // criando a tipagem em TS
    texto?: string; // variável texto, do tipo string, '?' deixa a propriedade opcional, caso contrário ela é OBRIGATÓRIA
    cor?: string;
    clicado?: () => void;
}

const Botao : React.FC <BotaoProps> = ({ 
    texto = "Click",
    clicado
}) =>{

    return(
        <>
            <button type="button" className="botaoGradienteVerdeAzul" onClick={ clicado }
            >{ texto }</button>
        </>
    )
}

export default Botao;