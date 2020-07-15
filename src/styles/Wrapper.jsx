import styled from 'styled-components';
import roboto from "../fonts/Roboto/Roboto-Regular.ttf";

export default styled.div`
@font-face {
    font-family: 'OurFont';
    src: url(${roboto}) format('ttf');
    font-style: normal;
  }
    

    max-width: 64rem;
    width: 70%;
    margin: 0rem auto;
    position: relative;
    z-index: 0;
    flex-direction: column;
    display: flex;
}
    
`