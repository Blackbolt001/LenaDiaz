import styled from "styled-components";
import videoBg from "../assets/video/fall-23881.mp4";

const Container = styled.div`
  min-width:none;
  height:10vh;
  background: linear-gradient(
  rgba(11, 34, 243, 0.89),rgba(36, 230, 101, 0.404));
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const Announcement = () => {
  return (
    <Container>
      this is the Announcement Bar Component
    </Container>
   
  )
}

export default Announcement;