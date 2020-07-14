import React from "react";
import Wrapper from '../styles/Wrapper';
import StyledP from '../styles/StyledP';
import styled from 'styled-components';

const Wrap = styled(Wrapper)`
    margin-top : 5vw;
`

function About() {
    return (
        <Wrap id={`about`}>
            <StyledP >
                Natalie Mering, the brains behind indie-folk outfit Weyes Blood, has toured as a member of noise-rock outfit Jackie-O Motherfucker and alongside Nautical Almanac, though most listeners will recognize her robustly forlorn voice from Ariel Pink’s Haunted Graffiti's Mature Themes.
            </StyledP>
        </Wrap>
    )
}

export default About;