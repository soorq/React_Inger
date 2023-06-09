import React, {useState, useEffect} from "react";
import {TrackWrapper,TrackProgress} from './TrackElement'
import styled from "styled-components";
const Track = () => {
    const [scroll, setScroll] = useState(0)

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 100;

        setScroll(scrolled)
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        //if(window.scrollY <= 0) styled`display: none;`
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return(
        <TrackWrapper>
            <TrackProgress style={{width : `${scroll}%`}}></TrackProgress>
        </TrackWrapper>
    )
}

export default Track