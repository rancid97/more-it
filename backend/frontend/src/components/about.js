import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {CircleFill, ArrowRight, ArrowLeft} from "react-bootstrap-icons";
import './styles/about.css'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {withRouter} from "react-router-dom";
import Pres from "./Pres";

const About = ({services}) => {
    const [currentService, setCurrentService] = useState(null);
    const [servicesList, setServicesList] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setServicesList(services)
    }, [services])
    useEffect(() => {
        servicesList && setCurrentService(servicesList[index])
    }, [servicesList, index])
    const indexHandler = (direction) => {
        switch(direction){
            case 'left':
                index !== 0 ? setIndex(index - 1) : setIndex(servicesList.length - 1);
                break;
            case 'right':
                index !== servicesList.length - 1 ? setIndex(index + 1) : setIndex(0);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        servicesList && setCurrentService(servicesList[index]);
    }, [servicesList, index])

    return (
        <Wrap>
            <Article>
                <Section>
                    <motion.h5 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeIn", duration: 0.4}}>
                        Opis firmy
                    </motion.h5>
                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{ ease: "easeIn", duration: 0.8 }}>
                        consectetur elit.<br/>
                        Praesent dictum cursus ex, quis faucibus nibh elementum a.<br/>
                        Pellentesque sit amet ligula felis non lectus accumsan.<br/>
                        Nullam vehicula lacus non lectus accumsanfermentum ,<br/>
                        ut auctor magna blandit. Nulla facilisi magna blandit.<br/>
                        Praesent eleifend fringilla est facilisis porttitor dictum justo.<br/>
                        Nullam fermentum semper neque dictum justo dictum justo,<br/>
                        et dictum justo mollis quis. Nulla facilisi ipsum nec magna .<br/>
                        Suspendisse potenti Curabitur in ipsum nec magna.<br/>
                        Curabitur in ipsum nec magna placerat elementum
                    </motion.p>
                </Section>
            </Article>
            <Services initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeIn", duration: 1}}>
                <CircleContainer>
                    <ArrowLeft className='arrow' onClick={() => indexHandler('left')}/>
                    {servicesList && servicesList.map(item =>
                        <CircleFill size={13} key={item.name} color={item.name === servicesList[index].name ? '#a70a44' : '#686D8F' }/>
                    )}
                    <ArrowRight className='arrow' onClick={() => indexHandler('right')}/>
                </CircleContainer>
                <Presentation id='pres'>
                    <Pres currentService={currentService}/>
                </Presentation>
            </Services>
        </Wrap>
    )
}

const Wrap = styled.main`
  margin: 2% 0;
  max-width: 100%;
`
const CircleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 10vw;
  margin: auto;
  padding: 2% 0;
  max-width: 100%;
  @media screen and (max-width: 768px){
    width: 40vw;
    max-width: 100vw;
  }
`
const Article = styled.article`
  width: 100vw;
  background: #F5F5F5;
  padding: 5vh 0 10vh;
  display: flex;
  justify-content: space-evenly;
  max-width: 100%;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`
const Section = styled.section`
  display: inline-block;
  margin: 0;
  padding: 0;
  color: #686D8F;
`
const Services = motion.custom(styled.article`
  width: 100vw;
  background: #F5F5F5;
  padding: 0 0 2%;
  max-width: 100%;
`)

const Presentation = styled.div`
  background: #a70a44;
  width: 45rem;
  padding: 1% 2%;
  border-radius: 1rem;
  color: white;
  text-align: center;
  margin: auto;
  font-weight: bold;
  transition: all ease-in 0.2s;

  @media screen and (max-width: 768px){
    max-width: 100vw;
    border-radius: 0;
  }
`

export default withRouter(About);


