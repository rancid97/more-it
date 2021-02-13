import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {Button, Form, Badge} from "react-bootstrap";
import Ticket from "./ticket";
const Admin = ({services}) => {
    const [password, setPassword] = useState(null);
    const [username, setUsername] = useState(null)
    const [response, setResponse] = useState(null);
    const [service,setService] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [content, setContent] = useState('');
    const [infoDisplay, setInfoDisplay] = useState(null);
    ////////////////////////////////////////////////////////////////

    useEffect(() => {
        services && setService(services[0].name);
    }, [services])

    const serviceHandler = (e) => {
        setService(e.target.value);
    }

    const serviceTypeHandler = (e) => {
        setServiceType(e.target.value);
        console.log(e.target.value);
    }

    const contentHandler = (e) => {
        setContent(e.target.value);
    }

    const sendFormHandler = () => {
        const data = {
            content: content,
            contentType: serviceType,
            name: service,
            password: password.toString(),
            username: username.toString()
        }
        axios.post('http://localhost:5000/admin/update-info', data)
            .then(res => {
                if(res.data === 'changed'){
                    setInfoDisplay('Wysłano')
                } else {
                    setInfoDisplay('Nie wysłano')
                }

            })
            .catch(
                setInfoDisplay('Nie wysłano')
            )
        ;
    }

    ////////////////////////////////////////////////

    const checkCredentials = () => {
        const credentials = {
            password: password.toString(),
            username: username.toString()
        }
        axios.post('http://localhost:5000/admin/login', credentials)
            .then(res => setResponse(res.data));
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const userNameHandler = (e) => {
        setUsername(e.target.value);
    }
    const deleteTicketHandler = (id) => {
        axios.delete('http://localhost:5000/admin/delete', {data: {id:id}})
            .then(res => console.log(res.data))
            .then(checkCredentials)
    }
    const readTicketHandler = (id) => {
        const ticket = {
            id: id
        }
        axios.post('http://localhost:5000/admin/update',ticket)
            .then(res => console.log(res))
            .then(checkCredentials)
    }
    return(
        <>
            <label>Username: </label>
            <input type='text' onChange={userNameHandler}/><br/>
            <label>Password: </label>
            <input type='text' onChange={passwordHandler}/><br/>
            <button type='button' onClick={checkCredentials}>Zaloguj</button>
            <Form>
                <Form.Group>
                    <Form.Label>Rodzaj usługi</Form.Label>
                    <Form.Control as="select" onChange={serviceHandler}>
                        {services && services.map(item =>
                            <option key={item.name}>{item.name}</option>
                        )}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj danych</Form.Label>
                    <Form.Control as="select" onChange={serviceTypeHandler}>
                        <option value='shortDescription'>Krótki opis</option>
                        <option value='fullDescription'>Długi opis</option>
                        <option value='list'>Lista</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Label>Treść</Form.Label>
                    <Form.Control as="textarea" rows={5} onChange={contentHandler}/>
                </Form.Group>
                <Button variant="secondary" type="button" onClick={sendFormHandler}>
                    Wyślij
                </Button>
                {infoDisplay && <Badge variant='info'>{infoDisplay}</Badge>}
            </Form>
            <Article>
            {response && response.map(ticket =>
               <Ticket ticket={ticket} deleteTicketHandler={deleteTicketHandler} key={ticket._id} readTicketHandler={readTicketHandler}/>
            )}
            </Article>
        </>
    )
}

const Article = styled.article`
  background: #F5F5F5;
  section{
    margin: 4% 2%;
  }
`

export default Admin;
