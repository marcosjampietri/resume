import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import {
    beSklAction,


    feSklAction, psnSklAction,
    softSklAction
} from "../actions/filterAction";
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
                <Btn onClick={psnSkl}>
                    <h5>PERSONAL</h5>
                </Btn>
                <Btn onClick={softSkl}>
                    <h5>SOFTWARES</h5>
                </Btn>
                <Btn onClick={beSkl}>
                    <h5>BACK-END</h5>
                </Btn>
                <Btn onClick={feSkl}>
                    <h5>FRONT-END</h5>
                </Btn>
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
    width: 100vw;

    display: grid;
    grid-template-columns: minmax(280px, 600px);
    justify-content: space-around;
    background-color: white;
    color: black;
    padding-bottom: 100px;
`;

const Filter = styled(animated.div)`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin: 50px 0px;
`;

const Skill = styled(animated.li)`
    display: grid;
    grid-template-columns: 20% 70%;
    grid-template-rows: 100px;
    justify-items: center;
    align-items: center;
    gap: 10px;
    list-style: none;
`;

const Icon = styled(animated.img)`
    grid-column: 1;

    border-radius: 10px;

    filter: drop-shadow(-3px 5px 3px #22003a);
    width: 50%;
`;
const Description = styled(animated.div)`
    grid-column: 2;
    background-color: hsla(263, 40%, 65%, 0);
    width: 100%;
    h4 {
        font-size: clamp(0.8rem, 3.5vw, 1.1rem);
    }
`;

const Btn = styled(animated.button)`
    height: 60px;
    width: 30%;
    margin: 5px;
    border-color: hsl(335, 100%, 50%);
    border-radius: 20px;
    font-weight: bolder;
    color: white;
    background-color: white;
    color: #22003a;
    transition: 1s;

    h5 {
        font-size: clamp(0.4rem, 2.5vw, 1rem);
    }

    &:focus {
        transition: 1s;
        background-color: hsla(345, 100%, 50%, 1);
        color: white;
    }
    &:hover {
        transition: 1s;
        background-color: hsla(345, 100%, 50%, 1);
        color: white;
    }
`;
