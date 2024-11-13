import Pagina from "../templates/Pagina";
import { Container } from "react-bootstrap";
import FormularioCadFornecedor from "./Formularios/FormCadFornecedor";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";
import { useState } from "react";
import { listaFornecedores } from "../dadosMocados/listaFornecedores";
export default function TelaCadastroFornecedor(props) {
    const [mostrarTabela, setMostrarTabela] = useState(true);
    return (
        <Pagina>
            <Container>
            <h2 className="text-center">Tela de Cadastro de Fornecedores</h2>
            {
                   mostrarTabela ? <TabelaFornecedores 
                                    setMostrarTabela={setMostrarTabela}
                                    listaFornecedores={listaFornecedores}/>
                   : <FormularioCadFornecedor
                    setMostrarTabela={setMostrarTabela}/> //Ternário //propriedades
                   }
            </Container>
        </Pagina>
    );
}