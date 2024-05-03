import React from 'react';
import '../index.css'
import styled from 'styled-components';


function Contact() {
    return (
        <SectionWrapper>
            
                <Intro>
                    I would love to hear from you with work or other general queries, please do get in touch!
                </Intro>
                <ContactGrid action="#">
                    <FirstName>
                        <label htmlFor="firstName"><h3>First Name *</h3></label>
                        <Input type="text" id="firstName" placeholder="" name="firstName" required />
                    </FirstName>
                    <LastName>
                        <label htmlFor="lastName"><h3>Last Name *</h3></label>
                        <Input type="text" id="lastName" placeholder="" name="lastName" required />
                    </LastName>
                    <Email>
                        <label htmlFor="email" ><h3>Your email *</h3></label>
                        <Input type="email" id="email" placeholder="" name="email" required />
                    </Email>
                    <Subject>
                        <label htmlFor="subject"><h3>Subject *</h3></label>
                        <Input type="text" id="subject" placeholder="" name="subject" required />
                    </Subject>
                    <Message>
                        <label htmlFor="message" ><h3>Your message *</h3></label>
                        <MessageBox id="message" rows="6" placeholder="" name="message" required></MessageBox>
                    </Message>
                    <Button>
                        <button type="submit" ><p>Send</p></button>
                    </Button>
                </ContactGrid>
            
        </SectionWrapper>
    );
}

const SectionWrapper = styled.div`
    min-height: calc(100vh - 300px);
    background-color: #ffcc99;
    background-color: ${({theme}) => theme.tertiaryLight};
    border: 20px solid white;
    padding: 20px;
    

    @media (max-width: 767px) {
        height: auto;
    }
`;

const Intro = styled.h3`
    text-align: center;
`;

const Input = styled.input`
    width: calc(100% - 6px);
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 2px solid black;
    background-color: transparent;
`;

const MessageBox = styled.textarea`
    width: calc(100% - 6px);
    border: 2px solid black;
    resize: none;
    margin: 20px 0px;
    background: transparent;
`;

// Grid areas
const FirstName = styled.div`
    grid-area: firstName;
    padding-right: 20px;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;
const LastName = styled.div`
    grid-area: lastName;
    padding-left: 20px;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;
const Email = styled.div`
    grid-area: email;
    padding-right: 20px;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;
const Subject = styled.div`
    grid-area: subject;
    padding-left: 20px;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;
const Message = styled.div`
    grid-area: message;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;
const Button = styled.div`
    grid-area: button;
    justify-self: center;
    @media (max-width: 767px) {
        padding: 0px;
    }
`;

const ContactGrid = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        " . firstName lastName . "
        " . email subject . "
        " . message message . "
        " . button button . ";

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            " firstName "
            " lastName "
            " email "
            " subject "
            " message "
            " button ";
    }
`;

export default Contact;