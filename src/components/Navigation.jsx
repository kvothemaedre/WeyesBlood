import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const Wrapper = styled.div`
    height : 150px;
    position : fixed;
    left : 10vw;
    top : 50%;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    transform : translate(0,-50%);
    z-index : 0;
    transition : all 0.4s;
    
`

const NavLink = styled(Link)`
    &:active{
        color : grey;
    }
    &:visited {
        color : black;
    }
    &:hover {
        color : grey;
    }
    
    text-decoration : none;
    font-size : 1.2em;
`

function NavBar() {
    return (
        <Wrapper>
            <NavLink to={`/home/#headerBody`}>TITANICE RISING</NavLink>
            <NavLink to={`/home/#about`}>ABOUT</NavLink>
            <NavLink to={`/home/#similar`}>SIMILAR</NavLink>
            <NavLink to={`/home/#spotify`}>SPOTIFY</NavLink>
        </Wrapper>
    )
}

export default NavBar;