import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import './styles/ratings.css'
import {ArrowLeft, ArrowRight, CircleFill, StarFill} from "react-bootstrap-icons";
import axios from "axios";


//resolve text highlight on arrow click

const Ratings = () => {
    const [colours, setColours] = useState([1,0,0,0,0]);
    const [stars, setStars] = useState([]);
    const [rating, setRating] = useState();
    const [ratingIndex, setRatingIndex] = useState(0);

    useEffect(() => {
        let newArr = [];
        if(rating) {
            for (let i = 0; i < rating[ratingIndex].stars; i++) {
                newArr.push(i);
            }
            setStars(newArr);
        }
    }, [rating, ratingIndex])
    useEffect(() => {
        axios.get('http://localhost:5000/ratings')
            .then(res => {
                console.log(res.data);
                setRating(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const changeColourRight = (arg) => {
        let newArr = [...colours];
        let index = newArr.indexOf(1);
        newArr[index] = 0;
        switch(arg){
            case 'left':
                if(index !== 0){
                    newArr[index - 1] = 1;
                    setRatingIndex(index - 1);
                } else {
                    newArr[4] = 1;
                    setRatingIndex(4)
                }
                break;
            case 'right':
                if(index !== 4){
                    newArr[index + 1] = 1;
                    setRatingIndex(index + 1);
                } else {
                    newArr[0] = 1;
                    setRatingIndex(0);
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
                    <CircleFill size={13} color={colours[0] === 1 ? '#686D8F' : '#a70a44'}/>
                    <CircleFill size={13} color={colours[1] === 1 ? '#686D8F' : '#a70a44'}/>
                    <CircleFill size={13} color={colours[2] === 1 ? '#686D8F' : '#a70a44'}/>
                    <CircleFill size={13} color={colours[3] === 1 ? '#686D8F' : '#a70a44'}/>
                    <CircleFill size={13} color={colours[4] === 1 ? '#686D8F' : '#a70a44'}/>
                    <ArrowRight className='arrow' onClick={() => changeColourRight('right')}/>
                </CircleContainer>
                <section className='ratings-section' id='ratings-section1'>
                    <h3>{rating && rating[ratingIndex].name}</h3>
                    <article id='star-container'>
                        {stars.map(star =>
                            <StarFill className='star' key={star} color='gold'/>
                        )}
                    </article>
                </section>
                <section className='ratings-section' id='ratings-section2'>
                    <h4>
                        {rating && rating[ratingIndex].service}
                    </h4>
                    <p>
                        {rating && rating[ratingIndex].text}
                    </p>
                </section>
            </Wrap>
        </Main>
    )
}
const Main = styled.main`
  height: 50vh;
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
  min-height: 30vh;
`

export default Ratings;
