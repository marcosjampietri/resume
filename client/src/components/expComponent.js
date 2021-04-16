import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { nextExpAction, prevExpAction } from "../actions/buttonAction";


const ExpSection = () => {
    const dispatch = useDispatch();

    //dispatch buttons
    const nextExp = () => {
        dispatch(nextExpAction());
    };
    const prevExp = () => {
        dispatch(prevExpAction());
    };

    //access rootReducer
    const { experiences, isLoding, expNum } = useSelector(
        (state) => state.overview
    );

    const expIndex = expNum % experiences.length;

    //Spring
    const transition = useTransition(
        experiences[expIndex],
        (item) => item && item._id,
        {
            from: { opacity: 0, transform: "scale(1.2)" },
            enter: { opacity: 1, transform: "scale(1)" },
            // enter: item => async (next, cancel) => {
            //     await next({opacity: 1})
            //     await next({transform: 'scale(1)'})
            //     // await next({transform: 'translate3d(0px,0,0,)'})
            // },
            leave: { opacity: 0, transform: "scale(0.8)" },
            // unique: true,
            // reset: false,
            config: {
                // velocity: 20
                // friction: 25,
                // precision: 1,
            },
        }
    );

    //component
    return (
        <>
            {!isLoding && (
                <Block>
                    <Panel>
                        <BtnP onClick={prevExp}>prev</BtnP>
                        <BtnN onClick={nextExp}>next</BtnN>
                    </Panel>
                    {transition.map(
                        ({ item, key, props }) =>
                            item && (
                                <Exp style={props} key={item._id}>
                                    <h6>POSITION</h6>
                                    <h2>{item.position}</h2>
                                    <h6>INSTITUTION</h6>
                                    <h3>{item.institution}</h3>
                                    <h6>ROLES</h6>
                                    <ul>
                                        {item.role.map((i, index) => (
                                            <li key={index}>{i}</li>
                                        ))}
                                    </ul>
                                    <h6>YEAR</h6>
                                    <h3>{item.year}</h3>
                                </Exp>
                            )
                    )}
                </Block>
            )}
        </>
    );
};

export default ExpSection;

//style------------------------------------------------------------------

const Block = styled(animated.div)`
    display: grid;
    justify-content: center;

    background-color: white;
`;

const Exp = styled(animated.div)`
    padding: 30px;
    display: grid;
    grid-template-columns: minmax(50vw, 400px);
    grid-row: 2;
    grid-column: 1;
    justify-content: center;
    gap: 0px;
    height: 750px;
    color: black;

    ul {
        padding-left: 20px;
    }

    h2 {
        color: hsla(335, 100%, 50%, 1);
        font-weight: bold;
    }

    h6 {
        align-self: end;
        margin-left: -16px;
        color: hsla(215, 20%, 50%, 1);
        /*letter-spacing: 0.4em;*/
        padding: 50px 0px 20px;
    }
`;

const Panel = styled(animated.div)`
    display: grid;
    gap: 30px;
`;
const Btn = styled(animated.button)`
    grid-row: 1;
    grid-column: 1;
    color: white;

    font-size: 25px;
    font-weight: bold;
    letter-spacing: 0.6em;
    border: solid 3px hsla(335, 50%, 100%, 1);
    box-shadow: 0px 0px 15px hsla(335, 100%, 50%, 0);
    transition: 0.8s;

    background-image: radial-gradient(hsl(0, 100%, 50%), hsl(335, 100%, 50%));
    &:hover {
        transition: 0.08s;
        box-shadow: 0px 0px 15px hsla(335, 100%, 50%, 1);
    }
`;

const BtnP = styled(Btn)`
    width: 40%;
    justify-self: start;
    border-radius: 50px 0px 0px 50px;
`;

const BtnN = styled(Btn)`
    width: 40%;
    justify-self: end;
    border-radius: 0px 50px 50px 0px;
`;
