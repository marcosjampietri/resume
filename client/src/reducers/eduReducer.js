const initState = {
  isLonding: [],
  EduOn: [],
};

export const tglEduReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLonding: true,
      };
    case "TOGGLE_EDU":
      return {
        ...state,
        EduOn: !state.EduOn,
      };
    default:
      return {
        ...state,
      };
  }
};
