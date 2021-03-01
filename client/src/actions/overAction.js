import axios from 'axios';

export const overAction = () => async (dispatch) => {

    dispatch({
        type: 'LOADING'
    });


    const expUrl = () => 'http://localhost:5000/experiences';
    const eduUrl = () => 'http://localhost:5000/educations';
    const sklUrl = () => 'http://localhost:5000/skills';

    const allExp = await axios.get(expUrl());
    const allEdu = await axios.get(eduUrl());
    const allSkl = await axios.get(sklUrl());

    dispatch({
        type: 'ALL_DATA',
        payload: {
            experiences: allExp.data,
            educations: allEdu.data,
            skills: allSkl.data,
        }
    });

};
