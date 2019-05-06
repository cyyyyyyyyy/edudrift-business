import { createActions, handleActions } from "redux-actions";

export const { setSelect } = createActions({
    SET_SELECT: params => params
});

const accounts = handleActions(
    {
        SET_SELECT: (state, action) => {
            return state;
        }
    },
    {}
);

export default accounts;
