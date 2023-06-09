import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import React, {useState} from "react";
import Hero from "../Components/Hero";
import InfoSection from "../Components/InfoSection";
import {HomeObjOne, HomeObjTwo, HomeObjThree} from "../Components/InfoSection/Data";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import Track from "../Components/Track";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Track />
            <NavBar toggle={toggle}/>
            <Hero />
            <InfoSection {...HomeObjOne}/>
            <InfoSection {...HomeObjTwo}/>
            <InfoSection {...HomeObjThree}/>
            <Services />
            <Footer />
        </>
    );
}

export default Home;
