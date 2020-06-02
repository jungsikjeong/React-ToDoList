import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import loading from './loading';
import toggle from './toggle';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  toggle,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
