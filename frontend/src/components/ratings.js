import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import './styles/ratings.css'
import {ArrowLeft, ArrowRight, CircleFill, StarFill} from "react-bootstrap-icons";
import ratings from "./content/ratings";

const Ratings = () => {
    const [colours, setColours] = useState([1,0,0,0,0]);
    const [rating, setRating] = useState(ratings[0]);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        let newArr = [];
        for(let i = 0; i < rating.stars; i++){
            newArr.push(i);
        }
        setStars(newArr);
    }, [rating])


    const changeColourRight = (arg) => {
        let newArr = [...colours];
        let index = newArr.indexOf(1);
        newArr[index] = 0;
        switch(arg){
            case 'left':
                if(index !== 0){
                    newArr[index - 1] = 1;
                    setRating(ratings[index - 1]);
                } else {
                    newArr[4] = 1;
                    setRating(ratings[4]);
                }
                break;
            case 'right':
                if(index !== 4){
                    newArr[index + 1] = 1;
                    setRating(ratings[index + 1]);
                } else {
                    newArr[0] = 1;
                    setRating(ratings[0]);
                }
                break;
            default:
                break;
        }
        setColours(newArr);
    }

    return(
        <Main>
            <Wrap>
                <CircleContainer>
                    <ArrowLeft className='arrow' onClick={() => changeColourRight('left')}/>
                    <CircleFill size={13} color={colours[0] === 1 ? '#686D8F' : '#F50D63'}/>
                    <CircleFill size={13} color={colours[1] === 1 ? '#686D8F' : '#F50D63'}/>
                    <CircleFill size={13} color={colours[2] === 1 ? '#686D8F' : '#F50D63'}/>
                    <CircleFill size={13} color={colours[3] === 1 ? '#686D8F' : '#F50D63'}/>
                    <CircleFill size={13} color={colours[4] === 1 ? '#686D8F' : '#F50D63'}/>
                    <ArrowRight className='arrow' onClick={() => changeColourRight('right')}/>
                </CircleContainer>
                <section className='ratings-section' id='ratings-section1'>
                    <h3>{rating.name}</h3>
                    <article id='star-container'>
                        {stars.map(star =>
                            <StarFill class='star' color='gold'/>
                        )}
                    </article>
                </section>
                <section className='ratings-section' id='ratings-section2'>
                    <h4>
                        {rating.service}
                    </h4>
                    <p>
                        {rating.text}
                    </p>
                </section>
            </Wrap>
        </Main>
    )
}
const Main = styled.main`
  height: 60vh;
  margin: 20vh 0;
`
const CircleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 10vw;
  margin: auto;
  padding: 2% 0;
  max-width: 100%;
`
const Wrap = styled.div`
  margin: 10vh 20vw;
  background: #F5F5F5;
  min-height: 40vh;
`

export default Ratings;
