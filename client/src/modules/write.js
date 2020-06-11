import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/posts';

export const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
export const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST'); // 포스트 작성
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));
export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => post); // 특정 포스트의 id를 담음

// 사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, postAPI.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
  title: '',
  body: [],
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => ({
      initialState,
    }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      // post와 postError를 초기화
      post: null,
      postError: null,
    }),
    // 포스트 작성 성공
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 작성 실패
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      ...state,
      originalPostId: post.id,
    }),
  },
  initialState,
);

export default write;
