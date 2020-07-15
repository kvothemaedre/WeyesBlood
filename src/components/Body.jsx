import React from "react";
import styled from 'styled-components';
import roboto from "../fonts/Roboto/Roboto-Regular.ttf";
import PerformingWeyes from "../images/PerformingWeyes.svg"


const Wrapper = styled.div`
    @font-face {
        font-family: 'OurFont';
        src: url(${roboto}) format('ttf');
        font-style: normal;
    }
    

    max-width: 64rem;
    width: 70%;
    margin: 0rem auto;
    margin-top : 10vw;
    margin-bottom : 10vw;
    padding-left: 0;
    padding-right : 0;
    position: relative;
    z-index: 1;
    flex-direction: column;
    display: flex;
}
    
`

const StyledP = styled.p`
    align : center;
    margin-left : 15vw;
    margin-right : 15vw;
    font-size : 1.2em;
    letter-spacing : 0.5px;
    line-height : 1.5em;

`

const Wrap = styled.div`
        display: grid;
        height: 100%;
`
const Image = styled.img`
    object-fit: cover;
    transition: top 0.5s;
    z-index : 1;
`

function Body() {
    return (
        <div>
            <Wrapper id={`headerBody`}>
                <StyledP >
                    Throughout her fourth record as Weyes Blood, tides are surging, trees are falling, the internet is ruining romance, capitalism is pushing workers to the brink of exhaustion, and reality is breaking her heart. In the wake of all this, Mering continues to search the stars for salvation. Belief—in oneself, in another, in myths—is Titanic Rising’s only request. “I want to make sure everybody feels like they deserve to be alive,” she told Pitchfork. “I hope you could have a smile during the apocalypse.” Building on the psychedelic chamber-folk of 2016’s Front Row Seat to Earth, these convictions push the 30-year-old songwriter towards her most ambitious and complex work yet.
            </StyledP>
                <StyledP>
                    Titanic Rising approaches these modern-day problems through a distinctly sentimental lens. Mering has referred to herself as a “nostalgic futurist,” and here she leans into that title by examining the strange ways technology has shaped modern romance through the earnest lyrics and golden, gigantic arrangements of 1970s pop songwriters. But unlike Joni Mitchell or the Carpenters, whose love affairs were clouded by plain old anxiety and desperation, Mering’s love affairs are clouded by algorithms. As she seeks true love on the jaunty “Everyday,” Mering’s desire for companionship bursts forth like a geyser. When she bellows “I need a love every day” over a baroque clavinet, it’s with a herculean determination.
            </StyledP>
            </Wrapper>
            <Wrap>
                <Image src={PerformingWeyes} alt="" />
            </Wrap>
        </div>
    )
}

export default Body;