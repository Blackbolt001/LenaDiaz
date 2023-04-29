import styled from "styled-components";
import videoBg from "../assets/video/fall-23881.mp4";

const Container = styled.div`
height:50px;
text-align:center;
background-color: #36eea1;
color: #020202;
display:flex;
object-fit:contain;
`;
const VideoBg = styled.video`

position:fixed;
z-index:-1;
`;

const Box = styled.div`
  z-index:10;
`

const Announcement = () => {
  return (
    <Container>
      <VideoBg src={videoBg} autoPlay={true} loop={true} controls={false} muted playsInline type="video.mp4"/>
      <Box>
      <p> Floating Header Page</p>
      </Box>
      </Container>
  )
}

export default Announcement;