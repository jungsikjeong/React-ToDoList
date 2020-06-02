import { createAction, handleActions } from 'redux-actions';

const TOGGLESTATE = 'toggle/TOGGLESTATUS';

export const toggleState = createAction(TOGGLESTATE, (toggle) => toggle);

const initialState = {
  toggle: '',
};

export default handleActions(
  {
    [TOGGLESTATE]: (state, { payload: { toggle } }) => ({
      ...state,
      toggle: !state.toggle,
    }),
  },
  initialState,
);
