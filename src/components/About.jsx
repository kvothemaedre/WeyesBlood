import React from "react";
import Wrapper from '../styles/Wrapper';
import StyledP from '../styles/StyledP';
import styled from 'styled-components';
import Text from "../text/About";
import AboutWeyes from "../images/AboutWeyes.svg"

//wrapp is always the parent div
const Wrapp = styled(Wrapper)`
    margin-top : 5vw;
    margin-bottom : 10vh;
`

//wrap is a div used for images.
const Wrap = styled.div`
        display: grid;
        height: 100%;
`

const Image = styled.img`
    object-fit: cover;
    transition: top 0.5s;
    z-index : 1;
`

function About() {
    return (
        <>
            <Wrapp id={`about`}>
                <StyledP >
                    Natalie Mering, the brains behind indie-folk outfit Weyes Blood, has toured as a member of noise-rock outfit Jackie-O Motherfucker and alongside Nautical Almanac, though most listeners will recognize her robustly forlorn voice from Ariel Pink’s Haunted Graffiti's Mature Themes.
                <Text />
                </StyledP>

            </Wrapp>
            <Wrap>
                <Image src={AboutWeyes} />
            </Wrap>
        </>
    )
}

export default About;