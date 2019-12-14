import { createActions, handleActions } from "redux-actions";

export const { setProgram } = createActions({
  setProgram: params => {
    return params
  }
});

const program = handleActions(
  {
    setProgram: (state, action) => {
      const { type, data } = action.payload;
      const newState = { ...state };
      newState[type] = data;
      return newState;
    }
  },
  {
    step0: {},
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
    step6: {}
  }
);

export default program;
