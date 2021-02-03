import React, {useState, useEffect} from "react";
import axios from "axios";

const UserList = () => {
    const [userNames, setUserNames] = useState([]);
    useEffect(() => {
        axios.get('https://moreit.herokuapp.com/users')
            .then(res => {
                setUserNames(res.data);
            })
            .catch(err => console.log(err))
    },[])
    useEffect(() => {
        console.log(userNames[0])
    }, [userNames])
    return (
        <>
        </>
    )
}

export default UserList;
