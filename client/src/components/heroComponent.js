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
                <div>
                    <h4>Hi. My name is</h4>
                    <h2>MARCOS JAMPIETRI</h2>
                    <h3>I work with creativity</h3>
                    <h4>
                        I'm a creative professional based in London, UK skilled
                        in building (and occasionally designing) exceptional
                        websites, applications, and everything in between.
                    </h4>
                    <Link to='/contact'>
                        <Btn>
                            <h4>GET IN TOUCH</h4>
                            <Btnbk>GET IN TOUCH</Btnbk>
                        </Btn>
                    </Link>
                </div>
            </Writes>
            <Me>
                <img src='./Images/Pics/Hero-Me.png' alt='A sexy man' />
            </Me>
        </Block>
    );
};

export default Hero;

//style------------------------------------------------------------------

const Block = styled(animated.div)`
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100%;
    ${below.med`
        width: 100%;
        
    `}

    margin-top: 10vh;
    align-items: center;
    background-image: linear-gradient(
        hsla(263, 39%, 10.5%, 0),
        hsla(263, 39%, 20.5%, 0.8)
    );
    z-index: -2;
    box-shadow: 0px 10px 25px hsla(335, 100%, 30%, 0.5);
`;

const Me = styled(animated.div)`
    z-index: -1;
    height: 100%;

    img {
        object-fit: cover;
        object-position: 100% 0%;

        ${below.med`
            width: 100%;
        `}
    }
`;

const Writes = styled(animated.div)`

    div {
        display: grid;
        gap: 50px;
        padding: 50px;

        h2 {
            font-size: 42px;
            background: -webkit-linear-gradient(120deg, hsl(330, 100%, 50%), hsl(10, 100%, 50%));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 900;
            // text-shadow: 0px 0px 20px hsl(340, 90%, 50%);
        }
        h3 {
         color: hsl(335, 100%, 50%);
        }
        h4 {
        color: white;
        }
    }
    width: 50vw;


hsl(0, 100%, 50%), 


    ${below.med`
    width: 100%;
        
    `}
`;

const Btn = styled(animated.button)`
    display: grid;
    align-items: center;
    grid-column: 1;
    grid-row: 1;
    background-color: transparent;
    width: 250px;
    height: 50px;
    border: black;
    border-radius: 20px;
    color: white;
    box-shadow: -10px 5px 25px black;
    transition: 1.2s;

    h4 {
        grid-column: 1;
        grid-row: 1;
    }
    &:hover {
        border: 2px solid hsla(335, 100%, 50%, 0);
        transition: 0.08s;
        cursor: pointer;
    }
    border: 2px solid hsla(335, 100%, 50%, 1);
`;

const Btnbk = styled(Btn)`
    width: 248px;
    height: 48px;
    opacity: 0;
    background-image: radial-gradient(hsl(360, 100%, 50%), hsl(335, 100%, 50%));
    &:hover {
        opacity: 1;
        box-shadow: 0px 0px 15px hsla(335, 100%, 50%, 1);
    }
`;
