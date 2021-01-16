const initState = {
    isLonding: true,
    experiences: [],
};


export const overReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLonding: true
            }
        case 'ALL_DATA':
            return {
                ...state,
                experiences: action.payload.experiences,
                isLonding: false
            }
        default:
            return {
                ...state
            };
    };
};