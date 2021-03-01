const initState = {
    isLonding: true,
    experiences: [],
    educations: [],
    skills: [],
    expNum: 0,
    eduNum: 0,
    sklFilter: null,
    // eduFilter: null
};

export const overReducer = (state = initState, action) => {
    switch (action.type) {
        case "ALL_DATA":
            return {
                ...state,
                experiences: action.payload.experiences,
                educations: action.payload.educations,
                skills: action.payload.skills,
                expNum: action.payload.experiences.length,
                eduNum: action.payload.educations.length,
                sklFilter: "development",
                // eduFilter: "development",
                isLonding: false,
            };
        case "NEXT_EXP":
            return {
                ...state,
                expNum: state.expNum + 1,
            };
        case "PREV_EXP":
            return {
                ...state,
                expNum: state.expNum - 1,
            };
        case "NEXT_EDU":
            return {
                ...state,
                eduNum: state.eduNum + 1,
            };
        case "PREV_EDU":
            return {
                ...state,
                eduNum: state.eduNum - 1,
            };
        case "FRONT_SKILL":
            return {
                ...state,
                sklFilter: "development",
            };
        case "BACK_SKILL":
            return {
                ...state,
                sklFilter: "backend",
            };
        case "SOFT_SKILL":
            return {
                ...state,
                sklFilter: "softwares",
            };
        case "PERS_SKILL":
            return {
                ...state,
                sklFilter: "personal",
            };
        // case "FRONT_EDU":
        //     return {
        //         ...state,
        //         eduFilter: "development",
        //     };
        // case "BACK_EDU":
        //     return {
        //         ...state,
        //         eduFilter: "backend",
        //     };
        // case "SOFT_EDU":
        //     return {
        //         ...state,
        //         eduFilter: "softwares",
        //     };
        // case "PERS_EDU":
        //     return {
        //         ...state,
        //         eduFilter: "personal",
        // };
        default:
            return {
                ...state,
            };
    }
};
