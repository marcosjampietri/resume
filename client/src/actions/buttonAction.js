

export const nextAction = () => async (dispatch) => {

    dispatch({
        type: 'NEXT'
    });

};

export const prevAction = () => async (dispatch) => {

    dispatch({
        type: 'PREV'
    });

};