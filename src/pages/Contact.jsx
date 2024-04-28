import React from 'react';
import '../index.css'
import styled from 'styled-components';


function Contact() {
    return (
        <SectionWrapper>
            <Wrapper>
                <Intro>
                    Please get in touch!
                </Intro>
                <ContactGrid action="#">
                    <FirstName>
                        <label htmlFor="firstName"><h3>First Name *</h3></label>
                        <Input type="text" id="firstName" placeholder="" required />
                    </FirstName>
                    <LastName>
                        <label htmlFor="lastName"><h3>Last Name *</h3></label>
                        <Input type="text" id="lastName" placeholder="" required />
                    </LastName>
                    <Email>
                        <label htmlFor="email" ><h3>Your email *</h3></label>
                        <Input type="email" id="email" placeholder="" required />
                    </Email>
                    <Subject>
                        <label htmlFor="subject"><h3>Subject *</h3></label>
                        <Input type="text" id="subject" placeholder="" required />
                    </Subject>
                    <Message>
                        <label htmlFor="message" ><h3>Your message *</h3></label>
                        <MessageBox id="message" rows="8" placeholder=""></MessageBox>
                    </Message>
                    <Button>
                        <button type="submit" ><p>Send</p></button>
                    </Button>
                </ContactGrid>
            </Wrapper>
        </SectionWrapper>
    );
}

const SectionWrapper = styled.div`
    padding: 20px;
`;

const Wrapper = styled.div`
padding: 40px 0px;
background-color: #ffcc99;
`;

const Intro = styled.h3`
text-align: center;
`;

const Input = styled.input`
width: 100%;
border-left: none;
border-right: none;
border-top: none;
border-bottom: 4px solid black;
`;

const MessageBox = styled.textarea`
width: 100%;
border: 4px solid black;
resize: none;
margin: 20px 0px;
`;

// Grid areas
const FirstName = styled.div`
grid-area: firstName;
padding-right: 20px;
`;
const LastName = styled.div`
grid-area: lastName;
padding-left: 20px;
`;
const Email = styled.div`
grid-area: email;
padding-right: 20px;
`;
const Subject = styled.div`
grid-area: subject;
padding-left: 20px;
`;
const Message = styled.div`
grid-area: message;
`;
const Button = styled.div`
grid-area: button;
justify-self: center;
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
`;

export default Contact;