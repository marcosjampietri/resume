

export const nextExpAction = () => async (dispatch) => {

    dispatch({
        type: 'NEXT_EXP'
    });

};

export const prevExpAction = () => async (dispatch) => {

    dispatch({
        type: 'PREV_EXP'
    });

};

export const nextEduAction = () => async (dispatch) => {

    dispatch({
        type: 'NEXT_EDU'
    });

};

export const prevEduAction = () => async (dispatch) => {

    dispatch({
        type: 'PREV_EDU'
    });

};
export const navAction = () => async (dispatch) => {

    dispatch({
        type: 'TOGGLE_NAV'
    });

};

export const tglEduAction = () => async (dispatch) => {

    dispatch({
        type: 'TOGGLE_EDU'
    });

};

