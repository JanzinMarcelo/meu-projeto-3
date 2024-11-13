import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormularioCadCliente from "./Formularios/FormCadCliente";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { useState } from "react";
import { listaClientes } from "../dadosMocados/listaClientes";
export default function TelaCadastroCliente(props){
    const [mostrarTabela, setMostrarTabela] = useState(true);
    return (
        <Pagina>
            <Container mt-3>
                <h2 className="text-center">Tela de Cadastro de Clientes</h2>
                {
                   mostrarTabela ? <TabelaClientes 
                                    setMostrarTabela={setMostrarTabela}
                                    listaClientes={listaClientes}/>
                   : <FormularioCadCliente 
                    setMostrarTabela={setMostrarTabela}
                    listaClientes={listaClientes}/> //Ternário //propriedades
                   }
               
            </Container>
        </Pagina>
    )
}