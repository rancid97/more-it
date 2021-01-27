import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {CircleFill, ArrowRight, ArrowLeft} from "react-bootstrap-icons";
import './styles/about.css'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import axios from "axios";


const About = () => {
    const [currentService, setCurrentService] = useState(null);
    const [services, setServices] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                setServices(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        services && setCurrentService(services[index])
    }, [services])
    const indexHandler = (direction) => {
        switch(direction){
            case 'left':
                index !== 0 ? setIndex(index - 1) : setIndex(services.length - 1);
                break;
            case 'right':
                index !== services.length - 1 ? setIndex(index + 1) : setIndex(0);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        services && setCurrentService(services[index]);
    }, [index])

    return (
        <Wrap>
            <Article>
                <Section>
                    <motion.h5 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeIn", duration: 0.4}}>
                        Pierwsza część opisu firmy
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
                <Section>
                    <motion.h5 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeIn", duration: 0.6}}>
                        Pierwsza część opisu firmy
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
                    {services && services.map(item =>
                        <CircleFill size={13} key={item.name} color={item.name === services[index].name ? '#a70a44' : '#686D8F' }/>
                    )}
                    <ArrowRight className='arrow' onClick={() => indexHandler('right')}/>
                </CircleContainer>
                <Presentation id='pres'>
                    <h5>{currentService && currentService.name}</h5>
                    <p>
                        {currentService && currentService.shortDescription}
                    </p>
                    <button>
                        <Link id='pres-link' to={`/uslugi/${currentService && currentService.name}`}>Czytaj więcej</Link>
                    </button>
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
`
const Article = styled.article`
  width: 100vw;
  background: #F5F5F5;
  padding: 5vh 0 10vh;
  display: flex;
  justify-content: space-evenly;
  max-width: 100%;
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
  border-radius: 20px;
  color: white;
  text-align: center;
  margin: auto;
  font-weight: bold;
  transition: all ease-in 0.2s;
`
export default About;


