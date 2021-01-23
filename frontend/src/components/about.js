import React, {useState} from 'react'
import styled from 'styled-components'
import {CircleFill, ArrowRight, ArrowLeft} from "react-bootstrap-icons";
import './styles/about.css'
import contents from "./content/servies";
import {Link} from "react-router-dom";


const About = () => {
    const [colours, setColours] = useState([1,0,0,0,0]);
    const [content, setContent] = useState(contents[0]);
    let newArr = [...colours];
    const changeColourRight = (arg) => {
        let index = newArr.indexOf(1);
        console.log(arg);
        newArr[index] = 0;
        switch(arg){
            case 'left':
                if(index !== 0){
                    newArr[index - 1] = 1;
                    setContent(contents[index - 1]);
                } else {
                    newArr[4] = 1;
                    setContent(contents[4]);
                }
                break;
            case 'right':
                if(index !== 4){
                    newArr[index + 1] = 1;
                    setContent(contents[index + 1]);
                } else {
                    newArr[0] = 1;
                    setContent(contents[0]);
                }
                break;
            default:
                break;
        }

        setColours(newArr);
    }
    return (
        <Wrap>
            <Article>
                <Section>
                    <h5>
                        Pierwsza część opisu firmy
                    </h5>
                    <p>
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
                    </p>
                </Section>
                <Section>
                    <h5>
                        Pierwsza część opisu firmy
                    </h5>
                    <p>
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
                    </p>
                </Section>
            </Article>
            <Services>
                <CircleContainer>
                    <ArrowLeft className='arrow' onClick={() => changeColourRight('left')}/>
                    <CircleFill size={13} color={colours[0] === 1 ? '#686D8F' : '#F50D63'}/>
                    <CircleFill size={13} color={colours[1] === 1 ? '#686D8F' : '#F50D63'}/>
                    <CircleFill size={13} color={colours[2] === 1 ? '#686D8F' : '#F50D63'}/>
                    <CircleFill size={13} color={colours[3] === 1 ? '#686D8F' : '#F50D63'}/>
                    <CircleFill size={13} color={colours[4] === 1 ? '#686D8F' : '#F50D63'}/>
                    <ArrowRight className='arrow' onClick={() => changeColourRight('right')}/>
                </CircleContainer>
                <Presentation id='pres'>
                    <h5>Rodzaj Usługi</h5>
                    <p>
                        {content}
                    </p>
                    <button>
                        <Link id='pres-link' to={`/uslugi/${colours.indexOf(1) + 1}`}>Czytaj więcej</Link>
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
const Services = styled.article`
  width: 100vw;
  background: #F5F5F5;
  padding: 0 0 2%;
  max-width: 100%;
`
const Presentation = styled.div`
  background: #F50D63;
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


