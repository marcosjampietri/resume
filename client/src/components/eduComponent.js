import React from "react";
import { tglEduAction } from "../actions/buttonAction";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { useTrail, animated } from "react-spring";

const EduSection = () => {
    //dispatch actions
    const dispatch = useDispatch();

    const toggleEdu = () => {
        dispatch(tglEduAction());
    };

    //access rootReducer
    const { educations, isLoding } = useSelector((state) => state.overview);

    const { EduOn } = useSelector((state) => state.eduRed);

    //spring
    const animation = useTrail(educations.length, {
        opacity: EduOn ? 1 : 0,
        y: EduOn ? 0 : 0,
        width: EduOn ? 280 : 0,
        from: { opacity: 0, y: 0, width: 0 },
    });

    //component
    return (
        <>
            <h4 style={{ background: "white", color: "lightgrey" }}>
                STYLES UNDER CONSTRUCTION
            </h4>
            {!isLoding && (
                <Component>
                    <button onClick={toggleEdu}>
                        {EduOn ? "HIDE" : "SHOW"}
                    </button>
                    {animation
                        // .slice(0, 5)
                        .map(
                            ({ y, height, ...rest }, index: educations._id) => (
                                <Edu
                                    style={{
                                        ...rest,
                                        transform: y.interpolate(
                                            (y) => `translate3d(0,0,0)`
                                        ),
                                    }}
                                    key={index}
                                >
                                    <h2 style={{ height }} key={index}>
                                        {educations[index].qualification}
                                    </h2>
                                    <h3>{educations[index].institution}</h3>
                                    <ul>
                                        {educations[index].tags.map(
                                            (i, index) => (
                                                <li key={index}>{i}</li>
                                            )
                                        )}
                                    </ul>
                                    <h3>{educations[index].year}</h3>
                                </Edu>
                            )
                        )}
                </Component>
            )}
        </>
    );
};

export default EduSection;

//style-----------------------------------------------------------------------------------

const Component = styled(animated.div)`
    display: grid;
    justify-content: center;
    background-color: white;
`;

const Edu = styled(animated.div)`
    display: grid;
    grid-template-columns: minmax(50vw, 400px);
    justify-content: center;
    h2 {
        padding: 20px;
    }
`;
