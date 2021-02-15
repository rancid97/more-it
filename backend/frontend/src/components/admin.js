import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {Button, Form, Badge, Container, Accordion, Card} from "react-bootstrap";
import Ticket from "./ticket";
const Admin = ({services}) => {
    const [password, setPassword] = useState(null);
    const [username, setUsername] = useState(null);
    const [response, setResponse] = useState(null);


    //////////////////////////////////////////////////
    //LOGOWANIE

    const checkCredentials = () => {
        const credentials = {
            password: password.toString(),
            username: username.toString()
        }
        axios.post('https://moreit.herokuapp.com/admin/login', credentials)
            .then(res => setResponse(res.data));
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const userNameHandler = (e) => {
        setUsername(e.target.value);
    }

    //////////////////////////////////////////////////

    //////////////////////////////////////////////////
    //AKTUALIZACJA USŁUG

    const [service,setService] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [content, setContent] = useState('');
    const [infoDisplay, setInfoDisplay] = useState(null);

    useEffect(() => {
        services && setService(services[0].name);
    }, [services])

    const serviceHandler = (e) => {
        setService(e.target.value);
    }
    const serviceTypeHandler = (e) => {
        setServiceType(e.target.value);
    }
    const contentHandler = (e) => {
        setContent(e.target.value);
    }

    const updateServiceHandler = () => {
        const data = {
            content: content,
            contentType: serviceType,
            name: service,
            password: password.toString(),
            username: username.toString()
        }
        axios.post('https://moreit.herokuapp.com/admin/update-info', data)
            .then(res => {
                setInfoDisplay(res.data)
            })
    }
    //////////////////////////////////////////////////

    //////////////////////////////////////////////////
    //DODAWANIE USŁUG

    const [newServiceName, setNewServiceName] = useState('');
    const [newShortDescription, setNewShortDescription] = useState('');
    const [newFullDescription, setNewFullDescription] = useState('');
    const [newList, setNewList] = useState('');
    const [addServiceInfo, setAddServiceInfo] = useState(null);

    const newServiceNameHandler = (e) => {
        setNewServiceName(e.target.value)
    }
    const newShortDescriptionHandler = (e) => {
        setNewShortDescription(e.target.value)
    }
    const newFullDescriptionHandler = (e) => {
        setNewFullDescription(e.target.value)
    }
    const newListHandler = (e) => {
        setNewList(e.target.value)
    }
    const addServiceHandler = () => {
        const data = {
            name: newServiceName,
            shortDescription: newShortDescription,
            fullDescription: newFullDescription,
            list: newList.split(','),
            password: password.toString(),
            username: username.toString()
        }
        axios.post('https://moreit.herokuapp.com/admin/service-add', data)
            .then(res => setAddServiceInfo(res.data))
    }

    //////////////////////////////////////////////////

    //////////////////////////////////////////////////
    //USUWANIE USLUG
    const [serviceToDelete, setServiceToDelete] = useState(null);
    const [deleteServiceInfo, setDeleteServiceInfo] = useState(null);

    const serviceToDeleteHandler = (e) => {
        setServiceToDelete(e.target.value)
    }

    const deleteServiceHandler = () => {
        const data = {
            name: serviceToDelete,
            password: password.toString(),
            username: username.toString()
        }
        axios.post('https://moreit.herokuapp.com/admin/service-delete', data)
            .then(res => setDeleteServiceInfo(res.data))
    }


    //////////////////////////////////////////////////

    //////////////////////////////////////////////////
    //DODAWANIE OCEN

    const [ratingName, setRatingName] = useState('');
    const [ratingStars, setRatingStars] = useState('');
    const [ratingText, setRatingText] = useState('');
    const [ratingService, setRatingService] = useState('');
    const [addRatingInfo, setAddRatingInfo] = useState(null);

    const ratingNameHandler = (e) => {
        setRatingName(e.target.value)
    }
    const ratingStarsHandler = (e) => {
        setRatingStars(e.target.value)
    }
    const ratingTextHandler = (e) => {
        setRatingText(e.target.value)
    }
    const ratingServiceHandler = (e) => {
        setRatingService(e.target.value)
    }

    const addRatingHandler = () => {
        const data = {
            name: ratingName,
            stars: parseInt(ratingStars),
            text: ratingText,
            service: ratingService,
            password: password.toString(),
            username: username.toString()
        }
        axios.post('https://moreit.herokuapp.com/admin/rating-add', data)
            .then(res => setAddRatingInfo(res.data))
    }
    //////////////////////////////////////////////////

    //////////////////////////////////////////////////
    //USUWANIE OCEN

    const [deletedRatingName, setDeletedRatingName] = useState('');
    const [deleteRatingInfo, setDeleteRatingInfo] = useState(null);

    const deleteRatingNameHandler = (e) => {
        setDeletedRatingName(e.target.value)
    }

    const deleteRatingHandler = () => {
        const data = {
            name: deletedRatingName,
            password: password.toString(),
            username: username.toString()
        }
        axios.post('https://moreit.herokuapp.com/admin/rating-delete', data)
            .then(res => setDeleteRatingInfo(res.data))
    }

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //ZMIANA OPISU FIRMY
    const [aboutDescription, setAboutDescription] = useState('');
    const [aboutHeader, setAboutHeader] = useState('');
    const [aboutInfo, setAboutInfo] = useState(null);

    const aboutHeaderHandler = (e) => {
        setAboutHeader(e.target.value)
    }
    const aboutDescriptionHandler = (e) => {
        setAboutDescription(e.target.value)
    }
    const changeAboutHandler = () => {
        const data = {
            header: aboutHeader,
            description: aboutDescription,
            password: password.toString(),
            username: username.toString()
        }
        axios.post('https://moreit.herokuapp.com/admin/update-description', data)
            .then(res => setAboutInfo(res.data))
    }
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //ZMIANA STOPKI
    const [footerName, setFooterName] = useState('');
    const [footerAddress, setFooterAddress] = useState('');
    const [footerAddress2, setFooterAddress2] = useState('');
    const [footerPhone, setFooterPhone] = useState('');
    const [footerEmail, setFooterEmail] = useState('');
    const [footerQuote, setFooterQuote] = useState('');
    const [footerInfo, setFooterInfo] = useState(null);

    const footerNameHandler = (e) => {
        setFooterName(e.target.value)
    }
    const footerAddressHandler = (e) => {
        setFooterAddress(e.target.value)
    }
    const footerAddress2Handler = (e) => {
        setFooterAddress2(e.target.value)
    }
    const footerPhoneHandler = (e) => {
        setFooterPhone(e.target.value)
    }
    const footerEmailHandler = (e) => {
        setFooterEmail(e.target.value)
    }
    const footerQuoteHandler = (e) => {
        setFooterQuote(e.target.value)
    }

    const changeFooterHandler = () => {
        const data = {
            name: footerName,
            address: footerAddress,
            address2: footerAddress2,
            phone: footerPhone,
            email: footerEmail,
            quote: footerQuote,
            password: password.toString(),
            username: username.toString()
        }
        axios.post('https://moreit.herokuapp.com/admin/update-footer', data)
            .then(res => setFooterInfo(res.data))
    }
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //OBSŁUGA ZGŁOSZEŃ

    const deleteTicketHandler = (id) => {
        axios.delete('https://moreit.herokuapp.com/admin/delete', {data: {id:id}})
            .then(res => console.log(res.data))
            .then(checkCredentials)
    }
    const readTicketHandler = (id) => {
        const ticket = {
            id: id
        }
        axios.post('https://moreit.herokuapp.com/admin/update',ticket)
            .then(res => console.log(res))
            .then(checkCredentials)
    }

    ///////////////////////////////////////////////////

    return(
        <Container>
            <Form className='m-auto'>
                {!response && <Form.Group>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control  onChange={userNameHandler}/><br/>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" onChange={passwordHandler}/><br/>
                    <Button variant='primary' type='button' className='ml-1' onClick={checkCredentials}>Zaloguj</Button>
                </Form.Group>
                }
                {response &&
                <>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} eventKey="0">
                                    Aktualizacja usług
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
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
                                        <Form.Label>Treść (w przypadku listy elementy oddzielone znakiem , )</Form.Label>
                                        <Form.Control as="textarea" onChange={contentHandler}/>
                                    </Form.Group>
                                    <Button variant="success" type="button" className='ml-1' onClick={updateServiceHandler}>
                                        Zmień
                                    </Button>
                                    {infoDisplay && <Badge className='ml-5' variant='info'>{infoDisplay}</Badge>}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} eventKey={1}>
                                    Dodawanie usługi
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={1}>
                                <Card.Body>
                                    <Form.Group>
                                        <Form.Label>
                                            Nazwa usługi
                                        </Form.Label>
                                        <Form.Control as='textarea' onChange={newServiceNameHandler}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>
                                            Krótki teskt
                                        </Form.Label>
                                        <Form.Control as='textarea' onChange={newShortDescriptionHandler}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>
                                            Długi tekst
                                        </Form.Label>
                                        <Form.Control as='textarea' onChange={newFullDescriptionHandler}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>
                                            Lista (elementy oddzielone znakiem , )
                                        </Form.Label>
                                        <Form.Control as='textarea' onChange={newListHandler}/>
                                    </Form.Group>
                                    <Button variant="secondary" type="button" className='ml-1' onClick={addServiceHandler}>
                                        Dodaj
                                    </Button>
                                    {addServiceInfo && <Badge className='ml-5' variant='info'>{addServiceInfo}</Badge>}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} eventKey={3}>
                                    Usuń usługę
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={3}>
                                    <Card.Body>
                                        <Form.Group>
                                            <Form.Label>Rodzaj usługi</Form.Label>
                                            <Form.Control as="select" onChange={serviceToDeleteHandler}>
                                                {services && services.map(item =>
                                                    <option key={item.name}>{item.name}</option>
                                                )}
                                            </Form.Control>
                                        </Form.Group>
                                        <Button variant="danger" type="button" className='ml-1' onClick={deleteServiceHandler}>
                                            Usuń
                                        </Button>
                                        {deleteServiceInfo && <Badge className='ml-5' variant='info'>{deleteServiceInfo}</Badge>}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} eventKey={4}>
                                    Dodaj ocene
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={4}>
                                    <Card.Body>
                                        <Form.Group>
                                            <Form.Label>Nazwa/Imię</Form.Label>
                                            <Form.Control onChange={ratingNameHandler}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Ocena</Form.Label>
                                            <Form.Control onChange={ratingStarsHandler}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Tekst</Form.Label>
                                            <Form.Control onChange={ratingTextHandler}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Rodzaj usługi</Form.Label>
                                            <Form.Control onChange={ratingServiceHandler}/>
                                        </Form.Group>
                                        <Button variant="secondary" type="button" className='ml-1' onClick={addRatingHandler}>
                                            Dodaj
                                        </Button>
                                        {addRatingInfo && <Badge className='ml-5' variant='info'>{addRatingInfo}</Badge>}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} eventKey={5}>
                                    Usuń ocene
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={5}>
                                    <Card.Body>
                                        <Form.Group>
                                            <Form.Label>Nazwa/Imie</Form.Label>
                                            <Form.Control onChange={deleteRatingNameHandler}/>
                                        </Form.Group>
                                        <Button variant="danger" type="button" className='ml-1' onClick={deleteRatingHandler}>
                                            Usuń
                                        </Button>
                                        {deleteRatingInfo && <Badge className='ml-5' variant='info'>{deleteRatingInfo}</Badge>}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} eventKey={6}>
                                    Zmień opis firmy
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={6}>
                                    <Card.Body>
                                        <Form.Group>
                                            <Form.Label>Nagłówek</Form.Label>
                                            <Form.Control onChange={aboutHeaderHandler}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Tekst</Form.Label>
                                            <Form.Control onChange={aboutDescriptionHandler}/>
                                        </Form.Group>
                                        <Button  variant="secondary" type="button" className='ml-1' onClick={changeAboutHandler}>
                                            Zmień
                                        </Button>
                                        {aboutInfo && <Badge className='ml-5' variant='info'>{aboutInfo}</Badge>}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} eventKey={7}>
                                    Zmień stopke
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={7}>
                                    <Card.Body>
                                        <Form.Group>
                                            <Form.Label>Nazwa/Imie</Form.Label>
                                            <Form.Control onChange={footerNameHandler}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Adres1</Form.Label>
                                            <Form.Control onChange={footerAddressHandler}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Adres2</Form.Label>
                                            <Form.Control onChange={footerAddress2Handler}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Telefon</Form.Label>
                                            <Form.Control onChange={footerPhoneHandler}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control onChange={footerEmailHandler}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Cytat</Form.Label>
                                            <Form.Control onChange={footerQuoteHandler}/>
                                        </Form.Group>
                                        <Button variant="secondary" type="button" className='ml-1' onClick={changeFooterHandler}>
                                            Zmień
                                        </Button>
                                        {footerInfo && <Badge className='ml-5' variant='info'>{footerInfo}</Badge>}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} eventKey={2}>
                                    Zgłoszenia
                                </Accordion.Toggle>
                                {response && <Accordion.Collapse eventKey={2}>
                                    <Article>
                                        {response && response.map(ticket =>
                                            <Ticket ticket={ticket} deleteTicketHandler={deleteTicketHandler}
                                                    key={ticket._id} readTicketHandler={readTicketHandler}/>
                                        )}
                                    </Article>
                                </Accordion.Collapse>
                                }
                            </Card.Header>
                        </Card>
                    </Accordion>
                </>
                }
            </Form>
        </Container>
    )
}

const Article = styled.article`
  background: #F5F5F5;
  section{
    margin: 4% 2%;
  }
`

export default Admin;
