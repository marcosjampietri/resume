import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";


const About = () => {
    //component
    return (
        <Component>
            <Abt>
                <h4>
                    Hello. I'm Marcos Jampietri and I enjoy working on creation
                    and technology. My goal is to deliver solutions to yet
                    unknown problems.
                </h4>
                <h4>
                    My career started as a musician at a very young age when I
                    started singing and playing guitar and piano, holding a
                    Degree in Music Education. Soon I started dealing with audio
                    and music production.
                </h4>
                <h4>
                    As I developed in my career, I've seen myself to act more
                    and more as an Entrepreneur, managing my brand, marketing
                    and online presence, what led me to web design and, recently
                    into programming languages as well.
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
