import React from "react";
import WeyesBlood from "../images/HeaderWeyes.svg"
import styled from 'styled-components';

const Wrapper = styled.div`
        display: grid;
        height: 100%;

    
`


const Image = styled.img`
    object-fit: cover;
    transition: top 0.5s;
    z-index : 1;
`

function Header() {
    return (
        <Wrapper>
            <Image src={WeyesBlood} alt="" />
        </Wrapper>
    )
}

export default Header;