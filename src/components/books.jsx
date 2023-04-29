import styled from "styled-components"

const Container = styled.div`
height:30px;
min-width: none;
text-align:center;
background-color: #150763;
color: #cccccc;
display:flex;
align-items:center;
justify-content:center;
font-size: calc(6px + 2vmin);
font-weight:bold;
`
const Books = () => {
  return (
    <Container>
        Georgia Goose Shopping
        </Container>
  )
}

export default Books;