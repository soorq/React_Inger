import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import {BrowserRouter as Router} from "react-router-dom";
import React, {useState} from "react";

const Home = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
        </>
    );
}

export default Home;
