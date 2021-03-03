import React from "react";

import styled from "styled-components";
import { animated } from "react-spring";

const About = () => {
    //component
    return (
        <Component>
            <Abt>
                <h4>
                    Hello. I'm Marcos Jampietri and I enjoy working on creation
                    and tecnology . My goal is to deliver solutions to yet
                    unkown problems.
                </h4>
                <h4>
                    My career started as a musician at a very young age when I
                    started singing and playing guitar and piano, field where I
                    hold a Degree in Music Education. Soon I got envolved with
                    audio and music production.
                </h4>
                <h4>
                    As My career grown I've seen the need to act as an
                    Entrepreneur, managing msy brand, marketing and online
                    presence, what lead me to web design and, recently into
                    programming lenguages as well.
                </h4>
            </Abt>
        </Component>
    );
};

export default About;

//style------------------------------------------------------------------

const Component = styled(animated.div)`
    display: grid;
    justify-content: center;
    background-color: white;
`;

const Abt = styled(animated.div)`
    padding: 30px;
    display: grid;
    grid-template-columns: minmax(50vw, 400px);
    gap: 30px;
    border-top: solid 2px hsla(0, 0%, 50%, 0.3);
    justify-content: center;

    h4 {
        color: black;
    }
`;
