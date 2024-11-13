import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

export default function FormularioCadFornecedor(props) {

    const [validado, setValidado] = useState(false);

    function cadastrar(evento) {
        const formulario = evento.currentTarget; 
        if (formulario.checkValidity()) {
            setValidado(false);
        } else {
            setValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    return (
        <Form validated={validado} className="border p-2" noValidate onSubmit={cadastrar}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="nome">
                    <Form.Label>Nome do Fornecedor:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nome do fornecedor"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o nome do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="cnpj">
                    <Form.Label>CNPJ:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="CNPJ do fornecedor"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o CNPJ do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="endereco">
                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Endereço do fornecedor"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o endereço do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="telefone">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control
                        required
                        type="tel"
                        placeholder="Telefone do fornecedor"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o telefone do fornecedor!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Email do fornecedor"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o email do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50", color: "#FFF", fontWeight: "bold" }}  type="submit">Cadastrar</Button>
            <Button className="ms-2" variant="secondary" type = "button" onClick={ ()=>{props.setMostrarTabela(true);}}>Voltar</Button>
        </Form>
    );
}
