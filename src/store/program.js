import { createActions, handleActions } from "redux-actions";

export const { setProgram } = createActions({
  setProgram: params => params
});

const program = handleActions(
  {
    setProgram: (state, action) => {
      console.log(action);
      return action.payload;
    }
  },
  {}
);

export default program;
