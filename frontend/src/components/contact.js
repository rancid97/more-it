import React, {useState} from 'react';
import styled from "styled-components";
import {Button, Form} from "react-bootstrap";
import {withRouter} from "react-router-dom"
import axios from "axios";

const Contact = ({match,services}) => {
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [service,setService] = useState('');
    const [content,setContent] = useState('');
    const nameHandler = (e) => {
        setUserName(e.target.value);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const phoneHandler = (e) => {
        setPhone(e.target.value);
    }
    const contentHandler = (e) => {
        setContent(e.target.value);
    }
    const serviceHandler = (e) => {
        setService(e.target.value);
    }
    const sendFormHandler = () => {
        const ticket = {
            username: username,
            email: email,
            phone: phone,
            service: service,
            content: content
        }
        axios.post('http://localhost:5000/tickets/add', ticket)
            .then(res => console.log(res.data));
    }
    return(
        <Wrap>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Imię i nazwisko (wymagane)</Form.Label>
                    <Form.Control required type="text" value={username} onChange={nameHandler}/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Adres email (wymagane)</Form.Label>
                    <Form.Control required type="email" placeholder="użytkownik@poczta.pl" value={email} onChange={emailHandler}/>
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Numer telefonu</Form.Label>
                    <Form.Control type="text" placeholder="123456789" value={phone} onChange={phoneHandler}/>
                </Form.Group>
                <Form.Group controlId="service">
                    <Form.Label>Rodzaj usługi</Form.Label>
                    <Form.Control as="select"  onChange={serviceHandler}>
                        {services && services.map(item =>
                            <option key={item.name}>{item.name}</option>
                        )}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Label>Treść</Form.Label>
                    <Form.Control as="textarea" rows={5} onChange={contentHandler}/>
                </Form.Group>
                <Button variant="secondary" type="button" onClick={sendFormHandler}>
                    Wyślij
                </Button>
            </Form>
        </Wrap>
    )
}

export default withRouter(Contact);

const Wrap = styled.main`
  background: #F5F5F5;
  margin: 2% 0 6%;
  padding: 5% 20%;
  width: 100vw;
  max-width: 100%;
`
