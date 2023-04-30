import { Facebook, GitHub, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    display:flex;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Logo = styled.h1`   

`;
const Desc = styled.p`   
    margin: 20px 0px;
`;
const SocialContainer = styled.div` 
    display: flex;
`;

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color: white;
    background-color: #${(props) =>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin:5px;
`;

const Center = styled.div`
  flex:1;
  padding:20px;
`;

const Title= styled.h3`
    margin-bottom:30px;
`;

const List= styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap: wrap;
    
`;

const ListItem=styled.li`
    width: 50%;
    margin-bottom:10px;
`;


const Right = styled.div`
  flex:1;
  padding:20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display:flex;
    align-items:center;
`;

const Payment = styled.img`
    width:50%;
`;
const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>GOOSE</Logo>
        <Desc>
            this is a mock up for an online E-Commerce full Stack Web Site.
        </Desc>
        <SocialContainer>
                <SocialIcon color='3b5999'>
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>

                <SocialIcon color='55A4EE'>
                    <Twitter/>
                </SocialIcon>

                <SocialIcon color='E60023'>
                    <GitHub/>
                </SocialIcon>
        </SocialContainer>
        </Left>

        <Center>
            <Title>LINKS</Title>
            <List>
                <ListItem>HOME</ListItem>
                <ListItem>CART</ListItem>
                <ListItem>MENS</ListItem>
                <ListItem>WOMENS</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>

        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room/>
           Covington,Georgia
        </ContactItem>
        <ContactItem>
            <Phone/>
           1-904-210-8619
        </ContactItem>
        <ContactItem>
            <MailOutline/>
            JGOSSETT73@GMAL.COM
        </ContactItem>
        <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer