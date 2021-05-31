export const addToList = (payload) => {
  return {
    type: "ADD_TO_LIST",
    payload,
  };
};
export const addToRemoveList = (payload) => {
  return {
    type: "ADD_TO_REMOVE",
    payload,
  };
};
