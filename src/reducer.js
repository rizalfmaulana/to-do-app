const initialState = {
  edit: false,
  input: "",
  editID: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT":
      return { ...state, edit: action.value };
    case "TYPE":
      return { ...state, input: action.in };
    case "ID":
      return { ...state, editID: action.id };
    default:
      return state;
  }
};

export default reducer;
