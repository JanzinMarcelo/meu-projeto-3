import { Container, Table, Button } from "react-bootstrap";

export default function TabelaFornecedores(props) {
    return (
        <Container>
            <Button 
                className="mt-3 mb-3" 
                onClick={() => { props.setMostrarTabela(false) }} 
                style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50", color: "#FFF", fontWeight: "bold" }}
            >
                Cadastrar novo fornecedor
            </Button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>CNPJ</th>
                        <th>Nome do Fornecedor</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props?.listaFornecedores.map((fornecedor) => {
                            return (
                                <tr>
                                    <td>{fornecedor.cnpj}</td>
                                    <td>{fornecedor.nome}</td>
                                    <td>{fornecedor.endereco}</td>
                                    <td>{fornecedor.telefone}</td>
                                    <td>{fornecedor.email}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}
