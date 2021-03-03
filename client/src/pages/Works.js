import React from "react";

import styled from "styled-components";
import { below } from "../styles";

import { animated } from "react-spring";

const Works = () => {
    return (
        <Page>
            <Title>
                <h1>PORTFOLIO</h1>
            </Title>
            <Work>
                <Text>
                    <h2>THIS WEBSITE</h2>
                    <Dash />
                    <ul>
                        <li>Dynamic Website made with REACT JS</li>
                        <li>Node and MongoDB on server</li>
                        <li>Completly Dinamic. No hard code</li>
                        <li>Animations with React-Spring</li>
                        <li>Statemanagemt with Redux</li>
                    </ul>
                </Text>
                <>
                    <Pic
                        src='./Images/Pics/ipad-my.jpg'
                        alt='My Website sample'
                    />
                </>
            </Work>
            <Work>
                <Text>
                    <h2>MASTER PODCAST</h2>
                    <Dash />
                    <ul>
                        <li>Dynamic Website made with REACT JS</li>
                        <li>Brand Development</li>
                        <li>Images and Logo Design</li>
                        <li>Neomorphism</li>
                        <li>
                            Graphics made on Affinity suite and Pixelmator Pro
                        </li>
                    </ul>
                </Text>
                <>
                    <Pic
                        src='./Images/Pics/ipad-Mst.jpg'
                        alt='Master Podcast Logo sample'
                    />
                </>
            </Work>
            <Work>
                <Text>
                    <h2>LORD MUSIC ACADEMY</h2>
                    <Dash />
                    <ul>
                        <li>Ecommerce website</li>
                        <li>
                            Made on Wordpress with HTML, Divi and complete
                            integration with plugins{" "}
                        </li>
                        <li>Seo Optimazation with RankMath</li>
                        <li>Analytics with Clicky</li>
                        <li>Static Checkout and Payment forms</li>
                    </ul>
                </Text>
                <>
                    <Pic
                        src='./Images/Pics/ipad-LMA.jpg'
                        alt='Lord Music Academy Website sample'
                    />
                </>
            </Work>
        </Page>
    );
};

export default Works;

//style------------------------------------------------------------------

const Page = styled(animated.div)`
    padding: 150px 0px;
    background-color: white;
    width: 100vw;
`;
const Title = styled(animated.div)`
    display: flex;
    justify-content: center;
    color: hsla(263, 40%, 40%, 1);
`;
const Work = styled(animated.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240, 1fr));

    height: 100%;
    margin: 50px 3% 150px 3%;
    padding: 3%;
    border: solid 2px hsla(263, 35%, 50%, 0.5);
`;
const Text = styled(animated.div)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 1fr auto;
    ${below.med`
        width: 100%;
        grid-column: 1;
    `}
    h2 {
        padding: 30px 0px;
        color: hsla(335, 100%, 50%, 1);
        text-shadow: -1px 1px 2px black;
        grid-column: 1 /5;
    }
    ul {
        align-self: start;
        grid-column: 2 /5;
        grid-row: 2;

        li {
            position: relative;
            top: -25px;
            font-size: 0.8em;
            padding: 12px;
        }
    }
`;
const Pic = styled(animated.img)`
    position: relative;
    top: -50px;
    width: 50vw;
    right: -5vw;

    grid-column: 2;
    ${below.med`
    grid-column: 1;
    right: -25vw;
    top: 0px;
    width: 70vw;
       order:-1;
    
    `}

    border-radius: 25px;
    box-shadow: -10px 10px 12px hsla(275, 100%, 11%, 0.7);
`;
const Dash = styled(animated.div)`
    grid-column: 1 /2;
    grid-row: 2;
    border: solid 2px hsla(335, 100%, 50%, 1);
    width: 80%;
    height: 0px;
`;
