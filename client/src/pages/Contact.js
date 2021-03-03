import React from "react";

import styled from "styled-components";
import { animated } from "react-spring";
import { below } from "../styles";

const Contact = () => {
    // const { NavOn } = useSelector((state) => state.nav);
    // const blur = useSpring({
    //     transform: NavOn ? "scale(0.9)" : "scale(1)",
    // });

    //Page
    return (
        <Page>
            <PageWrap>
                <Title>
                    <h1>CONTACT</h1>
                </Title>
                <div>
                    <h4>Marcos Jampietri</h4>
                    <h4>Web Developer, Designer and Audio Expert</h4>
                    <h4>London, UK</h4>
                </div>

                <Items>
                    <Item>
                        <Pic src='./Images/Icons/wta.svg' />
                        <h3>+44 07541 505202</h3>
                    </Item>
                    <Item>
                        <Pic src='./Images/Icons/mil.svg' />
                        <h3>mgjampietri@hotmail.com</h3>
                    </Item>
                    <Item>
                        <Pic src='./Images/Icons/lki.svg' />
                        <a
                            href='https://www.linkedin.com/in/marcos-jampietri-9942115b/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <h3> LINKEDIN</h3>
                        </a>
                    </Item>
                    <Item>
                        <Pic src='./Images/Icons/itg.svg' />
                        <a
                            href='https://www.instagram.com/marcosjampietri/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <h3>INSTAGRAM</h3>
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

    background-color: white;
`;

const PageWrap = styled(animated.div)`
    width: 100vw;
    height: 100vh;
    ${below.small`
        width: 100%;
        
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled(animated.div)`
    color: hsla(263, 40%, 40%, 1);
    text-shadow: -1px 1px 2px black;
    padding: 50px;
`;

const Items = styled(animated.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 500px));
`;
const Item = styled(animated.div)`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    padding: 30px;
    align-items: center;
    
    
    h3, a {
    padding 30px;
    color: black;
    }
`;

const Pic = styled(animated.img)`
    width: 5vh;
    max-width: 70px;
    border-radius: 20px;
    box-shadow: -10px 5px 5px black;
`;
