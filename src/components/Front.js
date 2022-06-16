import React from "react";
import {useNavigate} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
const Front = () => {
    const history = useNavigate();
    return (
        <>
        <div className="text-center">
        <h1 className="mt-5">
            Order Management System</h1>
            <button className="btn btn-primary mt-3 mr-3" onClick={()=>history('/signup')}> Signup</button>
            <img src = "./order.svg" style={{maxWidth:500}} alt=""/>
            <button className="btn btn-success mt-3 ml-3" onClick={()=>history('/login')}> Login</button>
            
            
            </div>
        </>
    )
}

export default Front;