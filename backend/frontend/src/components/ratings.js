import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import './styles/ratings.css'
import {motion} from "framer-motion";
import Opinion from "./opinon";
import {CardDeck} from "react-bootstrap";

const Ratings = ({ratings}) => {
    const [rating, setRating] = useState(null);
    useEffect(() => {
        ratings && setRating(ratings);
    }, [ratings])

    return(
        <Main initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeIn", duration: 0.6 }}>
            <h3>Zobacz co sądzą o nas nasi klienci</h3>
            <CardDeck>
            {rating && rating.map((data) =>
                <Opinion key={data._id} rating={data}/>
            )}
            </CardDeck>
        </Main>
    )
}
const Main = motion.custom(styled.article`
  text-align: center;
  h3{
    font-weight: bold;
    margin: 3% 0;
    display: block;
    color: #686D8F;
  }
  section {
    margin: 20vh auto 20vh;
    @media screen and(max-width: 1440px){
      margin: 0;
    }
  }
`)

export default Ratings;
