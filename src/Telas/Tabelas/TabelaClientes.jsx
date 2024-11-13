import { Container,Table, Button} from "react-bootstrap";
export default function TabelaClientes(props) {
    function sumirCliente(cpf) {
        if(window.confirm("Deseja realmente excluir o cliente?")) {

            const ListaNova= props?.listaClientes.filter((cliente) => {
                return cliente.cpf != cpf;
            });
            props.setListaClientes(ListaNova);
    }
}
    return (
        <Container>
            <Button className="mt-3 mb-3" onClick={ () =>{ props.setMostrarTabela(false)}} style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50", color: "#FFF", fontWeight: "bold" }}>Cadastrar novo cliente</Button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome Completo</th>
                        <th>Endereço</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>CEP</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                 {
                 props?.listaClientes.map((cliente) => {
                    return <tr>
                        <td>{cliente.cpf}</td>
                        <td>{cliente.nomeCompleto}</td>
                        <td>{cliente.endereco}</td>
                        <td>{cliente.cidade}</td>
                        <td>{cliente.estado}</td>
                        <td>{cliente.Cep}</td>
                        <td><Button variant ="danger" onClick={()=>{sumirCliente(cliente.cpf)}}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></Button></td>
                    </tr>
                 })
                }
                </tbody>
            </Table>
        </Container>
    );
}