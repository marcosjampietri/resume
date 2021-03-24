import React from "react";

import styled from "styled-components";
import { animated } from "react-spring";

const Contact = () => {
    //Page
    return (
        <Page>
            <PageWrap>
                <Title>
                    <h1>CONTACT</h1>
                </Title>
                <div>
                    <h5>Marcos Jampietri</h5>
                    <h5>Web Developer, Designer and Audio Expert</h5>
                    <h5>London, UK</h5>
                </div>

                <Items>
                    <Item>
                        <Pic src='./Images/Icons/wta.svg' />
                        <h5>+44 07541 505202</h5>
                    </Item>
                    <Item>
                        <Pic src='./Images/Icons/mil.svg' />
                        <h5>mgjampietri@hotmail.com</h5>
                    </Item>
                    <Item>
                        <Pic src='./Images/Icons/lki.svg' />
                        <a
                            href='https://www.linkedin.com/in/marcos-jampietri-9942115b/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <h5> LINKEDIN</h5>
                        </a>
                    </Item>
                    <Item>
                        <Pic src='./Images/Icons/itg.svg' />
                        <a
                            href='https://www.instagram.com/marcosjampietri/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <h5>INSTAGRAM</h5>
                        </a>
                    </Item>
                </Items>
            </PageWrap>
        </Page>
    );
};

export default Contact;

//style------------------------------------------------------------------

const Page = styled(animated.div)`
    padding-top: 180px;
    width: 100vw;
    height: 100vh;
    min-height: 600px;
    background-color: white;
`;

const PageWrap = styled(animated.div)`
    display: flex;

    flex-direction: column;

    align-items: center;
`;

const Title = styled(animated.div)`
    color: hsla(263, 40%, 40%, 1);
    text-shadow: -1px 1px 2px black;
`;

const Items = styled(animated.div)`
    display: grid;
`;
const Item = styled(animated.div)`
    align-items: center;

    h5,
    a {
        color: black;
    }
`;

const Pic = styled(animated.img)`
    min-width: 30px;
    max-width: 50px;
    border-radius: 2vw;
    box-shadow: -10px 5px 5px black;
`;
