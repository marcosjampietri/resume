import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";
import { animated } from "react-spring";

import { below } from "../styles";

const Hero = () => {
    //access rootReducer

    //component
    return (
        <Block>
            <Writes>
                <h4>Hi. My name is</h4>
                <h2>MARCOS JAMPIETRI</h2>
                <h3>I work with creativity</h3>
                <h4>
                    I'm a creative professional based in London, UK skilled in
                    building (and occasionally designing) exceptional websites,
                    applications, and everything in between.
                </h4>
                <Btn to='/contact'>
                    <h5>GET IN TOUCH</h5>
                    <BtnOn></BtnOn>
                </Btn>
            </Writes>
            <Me>
                <img src='./Images/Pics/Hero-Me.png' alt='A sexy man' />
            </Me>
            <Gradient />
        </Block>
    );
};

export default Hero;

//style------------------------------------------------------------------

const Block = styled(animated.div)`
    position: relative;
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    min-height: 600px;

    margin-top: 10vh;
    align-items: center;
`;

const Gradient = styled(animated.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

    padding-top: 10vh;
    align-items: center;
    background-image: linear-gradient(
        hsla(263, 39%, 10.5%, 0),
        hsla(263, 39%, 20.5%, 0.95)
    );
    box-shadow: 0px 10px 25px hsla(335, 100%, 30%, 0.7);
`;

const Me = styled(animated.div)`
    position: absolute;
    top: 30px;
    right: 0px;
    z-index: -1;
    ${below.med`
    top: 12vw;
    `}

    img {
        height: 100%;
        object-fit: cover;
        object-position: 100% 0%;

        ${below.med`
            width:80vw;
        `}
    }
`;

const Writes = styled(animated.div)`
    position: absolute;

    max-width: 700px;
    padding: 5vw;
    h2 {
        font-size: clamp(1.5em, 10vw, 5em);
        background: -webkit-linear-gradient(
            120deg,
            hsl(10, 100%, 50%),
            hsl(330, 100%, 50%)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
    }
    h3 {
        color: hsl(335, 100%, 50%);
    }
    h4 {
        color: white;
        font-size: clamp(0.5em, 2.5vw, 1em);
    }
`;

const Btn = styled(Link)`
    position: absolute;
    z-index: 3;
    width: 300px;
    height: 50px;

    ${below.med`
    width:80vw;
`}

    margin: 50px 0px;

    box-shadow: -10px 5px 25px black;
    border-radius: 20px;
    color: white;
    border: 2px solid hsla(335, 100%, 50%, 1);
    transition: 1.2s;
    &:hover {
        transition: 0.4s;
        border: 2px solid hsla(335, 100%, 50%, 0);
    }

    display: grid;

    h5 {
        grid-column: 1;
        grid-row: 1;
        z-index: 4;
        pointer-events: none;
        place-self: center;
    }
`;

const BtnOn = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 1;
    grid-row: 1;
    transition: 1.2s;
    opacity: 0;
    border-radius: 20px;

    background-image: radial-gradient(hsl(335, 100%, 70%), hsl(360, 100%, 40%));
    &:hover {
        transition: 0.3s;
        opacity: 1;
        box-shadow: 0px 0px 15px hsla(335, 100%, 50%, 1);
    }
`;
