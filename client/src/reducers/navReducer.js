const initState = {
    NavOn: false,
    EduOn: false,

};


export const navReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_NAV':
            return {
                ...state,
                NavOn: !state.NavOn,
            }   
        default:
            return {
                ...state
            };
    };
};


