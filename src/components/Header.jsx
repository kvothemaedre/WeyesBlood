import React from 'react';
import WeyesBlood from '../images/HeaderWeyes.svg';
import styled from 'styled-components';
import WeyesWater from '../vid/WeyesWater.gif';
import WeyesFloat from '../images/WeyesFloat.png'
const Wrapper = styled.div`
        display: grid;
        height: 100%;  
`


const Image = styled.img`
    object-fit: cover;
    transition: top 0.5s;
    z-index : 1;
`

const VidWrap = styled.div`
        width:100%;
        height:100vh;
        overflow: hidden;
        background-image: url(${WeyesFloat});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        z-index : 1;
    
`

const Vid = styled.img`
        object-fit: cover;
        width:100%;
        height:100%;
`

function Header() {
    return (
        <Wrapper>
            <Image src={WeyesBlood} alt="" />
            <VidWrap>
                <Vid src={WeyesWater} alt="" />
            </VidWrap>

        </Wrapper>
    )
}

export default Header;