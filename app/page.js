"use client"
import {Button, Card, Container, FloatingLabel, ListGroup, Navbar, NavLink} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Accordion from 'react-bootstrap/Accordion';


function HeaderComponent() {
    return <Navbar expand="lg" className="bg-dark">
        <Container fluid>
            <Navbar.Brand href="#" className="text-white">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    Лого
                >
                    <Nav.Link href="#shop" className="text-white">Магазин</Nav.Link>
                    <Nav.Link href="#inventory" className="text-white">Инвентарь</Nav.Link>
                    <Nav.Link href="#support" className="text-white">Поддержка</Nav.Link>
                    <Nav.Link href="#rules" className="text-white">Правила</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Button variant="outline-success">Войти через STEAM</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

function BodyComponent() {
    return <Card style={{ width: '18rem', margin: "auto" }}>
        <div className="cardImage" />
        <Card.Body>
            <Card.Title className="text-center">Ключ tf2</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <FloatingLabel controlId="floatingInputGrid" label="Количество">
                    <Form.Control size="sm" type="number" placeholder="name@example.com" />
                </FloatingLabel>
            </ListGroup.Item>

        </ListGroup>
        <Card.Body className="cardFooterBtns">
            <Button variant="success">Купить</Button>
            <Button variant="danger">Продать</Button>
        </Card.Body>
    </Card>
}

function FooterComponent() {
    return <Container className="bg-dark footerContainer">
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Контакты: </Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        <ListGroup.Item className="d-flex gap-1">Email: <NavLink href="https://www.youtube.com/">@testEmail</NavLink></ListGroup.Item>
                        <ListGroup.Item className="d-flex gap-1">Вконтакте: <NavLink href="https://www.youtube.com/">@testVk</NavLink></ListGroup.Item>
                        <ListGroup.Item className="d-flex gap-1">Телеграм: <NavLink href="https://www.youtube.com/">@testTelegram</NavLink></ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <div className="footerLeftLinks text-white">
            <NavLink>Правила</NavLink>
            <NavLink>Магазин</NavLink>
        </div>
    </Container>
}

export default function Home() {
  return (
    <main className="bg-light">
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
    </main>
  );
}
