import axios from 'axios';

export const overAction = () => async (dispatch) => {

    dispatch({
        type: 'LOADING'
    });


    const expUrl = () => 'http://localhost:5000/experiences';

    const allExp = await axios.get(expUrl());

    dispatch({
        type: 'ALL_DATA',
        payload: {
            experiences: allExp.data,
        }
    });

};