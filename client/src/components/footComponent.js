import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";

const Footer = () => {
    return (
        <Component>
            <Foot></Foot>
        </Component>
    );
};

export default Footer;

//style------------------------------------------------------------------

const Component = styled(animated.div)`
    display: grid;
    justify-content: center;
    background-color: #202020;
`;

const Foot = styled(animated.div)`
    height: 400px;
`;
