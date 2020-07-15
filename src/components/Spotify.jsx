import React from "react";
import Wrapper from '../styles/Wrapper';
import StyledP from '../styles/StyledP';
import styled from 'styled-components';

const Wrapp = styled(Wrapper)`
    margin-left : 15vw;
    margin-right : 15vw; 
    margin-bottom : 50px;  
    margin-top : 5px; 
`

const StyledHead = styled(StyledP)`
    font-size : 1.5em;
    margin-bottom : 25px;
`
function Spotify() {
    return (
        <Wrapper id={`spotify`}>
            <StyledHead>Check her music out!</StyledHead>
            <Wrapp>
                <iframe src="https://open.spotify.com/embed/artist/3Uqu1mEdkUJxPe7s31n1M9" title="Weyes Blood" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

            </Wrapp>
        </Wrapper>
    )
}

export default Spotify;