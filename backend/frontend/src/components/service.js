import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";
import {withRouter} from "react-router-dom";

const Service = ({match, services}) => {
    const [service, setService] = useState(null);
    useEffect(() => {
        services && setService(services.filter(data => data.name === match.params.name.toString()));
    }, [match.params.name, services])
    return(
        <Wrap>
            <Article>
                <section>
                    <motion.h3 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeIn", duration: 1 }}>
                        {service && service[0].name}
                    </motion.h3>
                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, ease: "easeIn", duration: 1 }}>
                        {service && service[0].fullDescription}
                    </motion.p>
                    <motion.ul initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1, ease: "easeIn", duration: 1 }}>
                        {service && service[0].list.map(item =>
                            <li key={item}>{item}</li>)}
                    </motion.ul>
                </section>
            </Article>
            <button><Link style={{color: 'white'}} to={`/kontakt`}>Zamów</Link></button>
        </Wrap>
    )
}

const Wrap = styled.main`
  margin: 2% 0;
  max-width: 100%;
  button{
    margin: 5% auto;
    padding: 1rem 2rem;
    display: block;
    background: #a70a44;
    font-weight: bold;
    font-size: larger;
    border: none;
    border-radius: 1rem;
  }
`
const Article = styled.article`
  max-width: 100%;
  padding: 0 10%;
  background: #F5F5F5;
  color: #686D8F;
  min-height: 70vh;
  
  section{
    max-width: 50%;
    padding: 1rem 0;
    font-size: 120%;

    @media screen and (max-width: 768px){
      min-width: 100%;
      padding: 0;
      margin: 0;
    }
    
  }
  
  ul{
    font-weight: bold;
    margin: 10% 0 !important;
  }
  
  h3{
    margin: 2% 0;
    display: inline-block;
  }
  
  p{
    font-weight: bold;
    margin: 2% 0;
  }
  
  ul{
    margin: 2% 0;
    display: inline-block;
  }
`
export default withRouter(Service);
