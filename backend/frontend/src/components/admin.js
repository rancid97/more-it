import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Ticket from "./ticket";
const Admin = () => {
    const [password, setPassword] = useState(null);
    const [response, setResponse] = useState(null);
    const checkCredentials = () => {
        const credentials = {
            password: password.toString()
        }
        axios.post('http://localhost:5000/admin/add', credentials)
            .then(res => setResponse(res.data));
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
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
            <input type='text' onChange={passwordHandler}/>
            <button type='button' onClick={checkCredentials}>Zaloguj</button>
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
