import React from 'react';
import '../index.css'
import styled from 'styled-components';


function Contact() {
    return (
        <section>
            <Wrapper>
                <Intro>
                    Please get in touch!
                </Intro>
                <ContactGrid action="#">
                    <FirstName>
                        <label htmlFor="firstName"><p>First Name *</p></label>
                        <Input type="text" id="firstName" placeholder="" required />
                    </FirstName>
                    <LastName>
                        <label htmlFor="lastName"><p>Last Name *</p></label>
                        <Input type="text" id="lastName" placeholder="" required />
                    </LastName>
                    <Email>
                        <label htmlFor="email" ><p>Your email *</p></label>
                        <Input type="email" id="email" placeholder="" required />
                    </Email>
                    <Subject>
                        <label htmlFor="subject"><p>Subject *</p></label>
                        <Input type="text" id="subject" placeholder="" required />
                    </Subject>
                    <Message>
                        <label htmlFor="message" ><p>Your message *</p></label>
                        <MessageBox id="message" rows="8" placeholder=""></MessageBox>
                    </Message>
                    <Button>
                        <button type="submit" ><p>Send</p></button>
                    </Button>
                </ContactGrid>
            </Wrapper>
        </section>
    );
}

const Wrapper = styled.div`
padding: 50px 0px;
`;

const Intro = styled.p`
text-align: center;
`;

const Input = styled.input`
width: 100%;
border-left: none;
border-right: none;
border-top: none;
border-bottom: 2px solid black;
`;

const MessageBox = styled.textarea`
width: 100%;
border: 2px solid black;
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