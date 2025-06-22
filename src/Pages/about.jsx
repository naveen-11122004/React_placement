
import {useContext } from "react"
import { useState } from 'react';
import  {Link} from 'react-router-dom';
import {UserContext } from '../hooks/UserContext';
const  About= () => {
    const user=useContext(UserContext)

    return(
        <div>
            <h1>About page</h1>
            <h1>Hi!! {user.name}</h1>
            <h2>Age:{user.age}</h2>
            <h2>Department: {user.dept}</h2>
            <Link to='/state'>UseState Example</Link><br />
            <Link to='/form'>UseState Example</Link><br />
            <Link to='/effect'>UseState Example</Link><br />
        </div>
    )
}
export default About