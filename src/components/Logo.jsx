import styled from "styled-components";

const Container = styled.div`
width:20vw;
  height:30vh;
  background: linear-gradient(
  rgba(24, 24, 24, 0.89),rgba(223, 231, 226, 0.404));
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const Logo = () => {
  return (
    <Container>
      this for the Logo Bar 
    </Container>
   
  )
}

export default Logo;