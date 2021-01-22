import React, {useState, useEffect} from "react";
import axios from "axios";

const UserList = () => {
    const [userNames, setUserNames] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users')
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
