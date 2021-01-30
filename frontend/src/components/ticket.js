import React from "react";

const Ticket = ({ticket, deleteTicketHandler, readTicketHandler}) => {
    return(
        <section>
            <h4>{ticket.username}</h4>
            <h5>{ticket.email}</h5>
            <h5>{ticket.service}</h5>
            <p>id: {ticket._id}</p>
            <p>Tekst: {ticket.content}</p>
            <p>Data zgłoszenia: {ticket.createdAt}</p>
            <button type='button' onClick={() => deleteTicketHandler(ticket._id)}>Usuń</button>
            {ticket.isRead !== true ? <><p>nowe!</p><button onClick={() => readTicketHandler(ticket._id)}>odczytane</button></> : <p>odczytane</p>}
            <hr/>
        </section>
    )
}

export default Ticket;
