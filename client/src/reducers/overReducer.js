const initState = {
    isLonding: true,
    experiences: [],
    itemNum: 0,
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
                isLonding: false,
                itemNum: 0
            }
        case 'NEXT':
            return {
                ...state,
                itemNum: state.itemNum + 1
            }
        case 'PREV':
            return {
                ...state,
                itemNum: state.itemNum - 1
            }
        default:
            return {
                ...state
            };
    };
};

