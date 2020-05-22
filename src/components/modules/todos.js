// let id = 4;

// Type
const INSERT = "insert";
// const REMOVE = "remove";
// const TOGGLE = "toggle";

// 액션함수
export const insert = ({ todo }) => ({
  type: INSERT,
  todo,
});
// export const remove = () => ({});
// export const toggle = () => ({});

const initialState = {
  todos: [
    {
      id: 1,
      text: "test one text",
      checked: false,
    },
    {
      id: 2,
      text: "test tne text",
      checked: false,
    },
    {
      id: 3,
      text: "test three text",
      checked: true,
    },
  ],
};

// 리듀서
function todos(state = initialState, action) {
  switch (action.type) {
    case INSERT:
      return { ...state, todos: action.payload };

    // case REMOVE:
    //   return { ...state, loginSuccess: action.payload };

    // case TOGGLE:
    //   return { ...state, userData: action.payload };

    default:
      return state;
  }
}

export default todos;
