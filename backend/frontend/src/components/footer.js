import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {PersonLinesFill, GeoAltFill, TelephoneFill, EnvelopeFill} from "react-bootstrap-icons";
import './styles/footer.css';

const Footer = ({data}) => {
    const [currentData, setCurrentData] = useState(null);
    useEffect(() => {
        setCurrentData(data)
    }, [data])
    return (
        <>
            <Wrap>
                <Left>
                    <h5><PersonLinesFill color='black'/> Kontakt</h5>
                    <p>{currentData && currentData.name}</p>
                    <p>
                        <GeoAltFill color='black'/> {currentData && currentData.address}<br/>
                        {currentData && currentData.address2}
                    </p>
                    <p>
                        <TelephoneFill color='black' /> {currentData && currentData.phone}
                    </p>
                    <p>
                        <EnvelopeFill color='black' /> {currentData && currentData.email}
                    </p>
                </Left>
                <Right>
                    <H5>{currentData && currentData.quote}</H5>
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
  @media screen and (max-width: 768px){
    section{
      width: 100%;
    }
  }
`
const Left = styled.section`
  padding: 2% 2% 1%;
  width: 35vw;
  margin: 0;
  display: inline-block;
  color: #2a49ba;
`
const Right = styled.section`
  background: #2a49ba;
  width: 65vw;
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const H5 = styled.h5`
  display: inline-block;
  width: 40%
`

export default Footer;
