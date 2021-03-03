import axios from "axios";

export const overAction = () => async (dispatch) => {
    dispatch({
        type: "LOADING",
    });

    const url =
        process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

    const expUrl = () => `${url}/api/experiences`;
    const eduUrl = () => `${url}/api/educations`;
    const sklUrl = () => `${url}/api/skills`;

    const allExp = await axios.get(expUrl());
    const allEdu = await axios.get(eduUrl());
    const allSkl = await axios.get(sklUrl());

    dispatch({
        type: "ALL_DATA",
        payload: {
            experiences: allExp.data,
            educations: allEdu.data,
            skills: allSkl.data,
        },
    });
};
