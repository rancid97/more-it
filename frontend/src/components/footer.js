import React from 'react';
import styled from "styled-components";
import {PersonLinesFill, GeoAltFill, TelephoneFill, EnvelopeFill} from "react-bootstrap-icons";
import './styles/footer.css';

const Footer = () => {
    return (
        <>
            <Wrap>
                <Left>
                    <h5><PersonLinesFill color='black'/> Kontakt</h5>
                    <p>more-IT</p>
                    <p>
                        <GeoAltFill color='black'/> ul. Adres Ulicy<br/>
                        00-000 Miejscowość
                    </p>
                    <p>
                        <TelephoneFill color='black' /> +48 123 456 789
                    </p>
                    <p>
                        <EnvelopeFill color='black' /> adresEmail@poczta.pl
                    </p>
                </Left>
                <Right>
                    <H5>Motto/Cytat/Jakikolwiek tekst</H5>
                </Right>
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  margin: 5% 0 0;
  justify-content:flex-start;
  max-width: 100%;
  align-items: stretch;
  background: #F5F5F5;
`
const Left = styled.section`
  padding: 2% 2% 1%;
  width: 35vw;
  margin: 0;
  display: inline-block;
  color: #a70a44;
`
const Right = styled.section`
  background: #a70a44;
  width: 65vw;
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
const H5 = styled.h5`
  display: inline-block;
  width: 40%
`

export default Footer;
