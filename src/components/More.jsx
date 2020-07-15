import React from "react";
import Wrapper from '../styles/Wrapper';
import StyledP from '../styles/StyledP';
import styled from 'styled-components';
import JuliaHolter from '../images/julia-holter.svg';
import HaifWaif from '../images/Half-Waif.svg';
import CarolinePolachek from '../images/Caroline-Polachek.svg';

const Wrapp = styled(Wrapper)`
    display : flex;
    flex-direction : column;
    margin-top : 10vh;
    
`

const StyledChildP = styled.span`
    margin-bottom : 10vh;
`

const UlDiv = styled.div`
    margin-top : 3vh;
    margin-bottom : 3vh; 
`



function More() {
    return (
        <Wrapp id={`similar`}>
            <StyledP >
                <StyledChildP>There's no one quite like her but here are some artists that are similar to some extent and are fantastic in their own right</StyledChildP>
                <UlDiv>
                    <span>Julia Holter</span>
                    <UlDiv>
                        <img src={JuliaHolter} alt="" />
                    </UlDiv>
                </UlDiv>
                <UlDiv>
                    <span>Haif Waif</span>
                    <UlDiv>
                        <img src={HaifWaif} alt="" />
                    </UlDiv>
                </UlDiv>
                <UlDiv>
                    <span>Caroline Polachek</span>
                    <UlDiv>
                        <img src={CarolinePolachek} alt="" />
                    </UlDiv>
                </UlDiv>
            </StyledP>
        </Wrapp>
    )
}

export default More;