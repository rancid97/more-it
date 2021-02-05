import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {StarFill} from "react-bootstrap-icons";
import {motion} from "framer-motion";

const Opinion = ({rating}) => {
    const [stars, setStars] = useState(null);
    useEffect(() => {
        let newArr = [];
        if (rating) {
            for (let i = 0; i < rating.stars; i++) {
                newArr.push(i);
            }
            setStars(newArr);
        }
    }, [rating])
    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeIn", duration: 2}}>
            <Card style={{ width: '18rem', minHeight: '20vh', margin: 'auto'}} bg='light'>
                <Card.Body>
                    <Card.Title>{rating.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{rating.service}</Card.Subtitle>
                    <Card.Text>
                        {rating.text}
                    </Card.Text>
                    <Card.Text>
                        {stars && stars.map((num) =>
                            <StarFill key={`${rating._id}ocena_nr:${num}`}style={{color: 'gold'}}/>
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
        </motion.section>
    )
}

export default Opinion;
