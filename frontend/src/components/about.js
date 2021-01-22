import React from 'react'
import styled from 'styled-components'
import './styles/about.css'

const About = () => {
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
                <Test id='test'>
                    <h5>Rodzaj Usługi</h5>
                    <p>
                        Przewijane slajdy z krótkimi opisami usług.<br/>
                        Każdy funkcjonowałby jako odnośnik do podstrony,<br/>
                        opisującej daną usługę
                    </p>
                    <button>
                        Czytaj więcej
                    </button>
                </Test>
            </Services>
        </Wrap>
    )
}
const Wrap = styled.main`
  margin: 2% 0;  
`
const Article = styled.article`
  width: 100vw;
  background: #F5F5F5;
  padding: 10vh 0 10vh;
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
  padding: 1% 0 2%;
  max-width: 100%;
`
const Test = styled.div`
  background: #F50D63;
  width: 40rem;
  padding: 2% 2%;
  border-radius: 10px;
  color: white;
  text-align: center;
  margin: auto;
`
export default About;


