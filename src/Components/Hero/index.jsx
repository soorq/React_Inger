import React, {useState} from "react";
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from  './HeroElements'

import {Button} from '../ButtonElement'

import video from  '../../video/4K_100.mp4'

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Производство Конвейеров</HeroH1>
                <HeroP>Производим конвейерные системы различного вида и назначения, автоматизированные склады и многоярусные паркинги</HeroP>
                <HeroBtnWrapper>
                    <Button to='/signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                    >Заказать {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero