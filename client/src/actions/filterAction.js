// import axios from 'axios';

export const feSklAction = () => async (dispatch) => {
    // const ￼ = () => '￼'; ￼
    // const dataName = await axios.get((￼));

    dispatch({
        type: 'FRONT_SKILL'
        // payload: {
        // 	dataName.data,
        // }
    });
};

export const beSklAction = () => async (dispatch) => {
    dispatch({
        type: 'BACK_SKILL'
    });
};

export const softSklAction = () => async (dispatch) => {
    dispatch({
        type: 'SOFT_SKILL'
    });
};

export const psnSklAction = () => async (dispatch) => {
    dispatch({
        type: 'PERS_SKILL'
    });
};
