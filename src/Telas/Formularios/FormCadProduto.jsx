import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

export default function FormularioCadProduto(props) {
    const [validado, setValidado] = useState(false);

    function cadastrar(evento) {
        const formulario = evento.currentTarget; // aquele que disparou o evento
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
                <Form.Group as={Col} md="4" controlId="codigoProduto">
                    <Form.Label>Código do Produto:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ex: PROD001"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe o Código do Produto!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="nomeProduto">
                    <Form.Label>Nome do Produto:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ex: Caneta Azul"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe o Nome do Produto!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="qtEstoque">
                    <Form.Label>Quantidade Disponível:</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Ex: 100"
                        min="0"
                        step="1"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe a Quantidade Disponível!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="precoC">
                    <Form.Label>Preço de Compra:</Form.Label>
                    <Form.Control type="text" placeholder="Ex: 12.50" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe o Preço de Compra!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="precoV">
                    <Form.Label>Preço de Venda:</Form.Label>
                    <Form.Control type="text" placeholder="Ex: 20.00" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe o Preço de Venda!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="categoriaProduto">
                    <Form.Label>Categoria:</Form.Label>
                    <Form.Control as="select" required>
                        <option value="">Selecione uma categoria</option>
                        <option value="papelaria">Papelaria</option>
                        <option value="eletronico">Eletrônicos</option>
                        <option value="alimento">Alimentos</option>
                        <option value="vestuario">Vestuário</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Por favor, selecione uma Categoria!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50", color: "#FFF", fontWeight: "bold" }}  type="submit">Cadastrar</Button>
        </Form>
    );
}
