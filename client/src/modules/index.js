import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import loading from './loading';
import toggle from './toggle';
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  toggle,
  write,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga()]);
}

export default rootReducer;
