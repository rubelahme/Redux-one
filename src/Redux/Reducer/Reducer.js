import fakeData from "../../fakeData";
const initialState = {
  addList: fakeData,
  removeList: [],
  conformList: [],
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST": {
      const newData = {
        ...state,
        conformList: [...state.conformList, action.payload],
      };
      return newData;
    }
    case "ADD_TO_REMOVE": {
      const newData = {
        ...state,
        conformList: state.conformList.filter((pd) => pd.id === action.payload),
      };
      return newData;
    }
    default: {
      return state;
    }
  }
};
export default addReducer;
