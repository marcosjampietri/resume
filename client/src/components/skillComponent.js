import React from "react";
import {
    beSklAction,
    psnSklAction,
    softSklAction,
    feSklAction,
} from "../actions/filterAction";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const SkillSection = () => {
    //dispatch Action
    const dispatch = useDispatch();

    //dispatch buttons
    const feSkl = () => {
        dispatch(feSklAction());
    };
    const beSkl = () => {
        dispatch(beSklAction());
    };
    const softSkl = () => {
        dispatch(softSklAction());
    };
    const psnSkl = () => {
        dispatch(psnSklAction());
    };

    //access rootReducer
    const { skills, isLoding, sklFilter } = useSelector(
        (state) => state.overview
    );

    //Spring
    const fadeIn = useSpring({});

    //component
    return (
        <Block>
            <Filter>
                <Btn onClick={psnSkl}>PERSONAL</Btn>
                <Btn onClick={softSkl}>SOFTWARES</Btn>
                <Btn onClick={beSkl}>BACK-END</Btn>
                <Btn onClick={feSkl}>FRONT-END</Btn>
            </Filter>
            {!isLoding && (
                <ul>
                    {skills
                        .filter(
                            (item, i) =>
                                item.tags[0] === sklFilter ||
                                item.tags[1] === sklFilter ||
                                item.tags[2] === sklFilter
                        )
                        .map((item, i) => (
                            <Skill
                                style={(fadeIn, { gridRow: i + 1 })}
                                key={item._id}
                            >
                                <Icon
                                    // style={{ gridRow: i + 1 }}
                                    src={`./Images/Icons/${item.icon}.svg`}
                                    atl='icon'
                                    height='60px'
                                    width='60px'
                                ></Icon>
                                <Description>
                                    <h4>{item.name}</h4>
                                </Description>
                            </Skill>
                        ))}
                </ul>
            )}
        </Block>
    );
};

export default SkillSection;

//style------------------------------------------------------------------

const Block = styled(animated.div)`
    display: grid;
    grid-template-columns: minmax(280px, 600px);
    justify-content: space-around;
    background-color: white;
    color: black;
    padding-bottom: 500px;
`;

const Filter = styled(animated.div)`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin: 50px 0px;
`;

const Skill = styled(animated.li)`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100px;
    justify-items: center;
    align-items: center;
    gap: 10px;
    list-style: none;
`;

const Icon = styled(animated.img)`
    grid-column: 1;
    // background-image: radial-gradient(hsl(360, 100%, 50%), hsl(335, 100%, 50%));
    // border: solid 1px hsla(215, 85%, 10%, 0.1);
    border-radius: 10px;
    // box-shadow: -10px 1px 10px black;
    filter: drop-shadow(-3px 5px 4px #22003a);
    // padding: 20px;
`;
const Description = styled(animated.div)`
    grid-column: 2;
    background-color: hsla(263, 40%, 65%, 0);
    width: 100%;
    h4 {
    }
`;

const Btn = styled(animated.button)`
    height: 60px;
    width: 100%;
    margin: -20px;
    border-radius: 50px;
    font-weight: bolder;
    color: white;a
    background-color: white; 
    color: #22003A;
    transition: 1s;
    &:focus {
        transition: 1s;
        background-color: hsla(345, 100%, 50%, 1);
        color: white;
    }
`;
