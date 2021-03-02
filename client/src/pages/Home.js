import React, { useEffect } from "react";
import { overAction } from "../actions/overAction";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/heroComponent";
import About from "../components/aboutComponent";
import EduSection from "../components/eduComponent";
import ExpSection from "../components/expComponent";
import SkillSection from "../components/skillComponent";

import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Home = () => {
    //dispatch overAction
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(overAction());
    }, []);

    const { isLoding } = useSelector((state) => state.overview);
    //     const { NavOn } = useSelector((state) => state.nav);
    //
    //     const blur = useSpring({
    //         transform: NavOn ? "scale(0.9)" : "scale(1)",
    //     });

    //Page
    return (
        <Page>
            <Hero />
            <Title>
                <h2>A BIT ABOUT ME</h2>
            </Title>
            <About />
            <Title>
                <h2>MY EXPERIENCE</h2>
            </Title>
            <ExpSection />
            <Title>
                <h2>MY EDUCATION</h2>
            </Title>
            <EduSection />
            <Title>
                <h2>MY SKILLSET</h2>
            </Title>
            <SkillSection />
        </Page>
    );
};

export default Home;

//style------------------------------------------------------------------

const Page = styled(animated.div)``;

const Title = styled(animated.div)`
    display: flex;
    justify-content: center;
    padding: 50px;
    font-size: 1.2em;
    color: hsla(335, 100%, 50%, 1);
    background-color: white;
    text-shadow: -1px 1px 3px black;
`;
