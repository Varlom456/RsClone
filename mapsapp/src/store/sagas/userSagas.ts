import { takeEvery, put, all } from 'redux-saga/effects';
import { call, select } from 'typed-redux-saga';

import * as UserActions from '../actions/userActions';
import * as UserActionTypes from '../actionTypes/userActionTypes';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addSinglePointsAction } from '../actions/pointsActions';
import { showPoints, createUserRecord } from '../../firebase';

type FirebaseError = { message: string };

function* SignUpWorker(action: ReturnType<typeof UserActions.signUpAction>) {
  const { email, password, navigate, name, lastName } = action.payload;
  try {
    const auth = getAuth();
    const user = yield* call(createUserWithEmailAndPassword, auth, email, password);
    createUserRecord(name, lastName)
    yield put(UserActions.signUpSuccessAction(true, name, lastName));
    navigate('/main');
  } catch (error: unknown) {
    const { message } = error as FirebaseError;
    yield put(UserActions.signUpErrorAction(message.replace('Firebase: ', '')));
  }
}

function* loginWorker(action: ReturnType<typeof UserActions.signUpAction>) {
  const { email, password, navigate } = action.payload;
  try {
    const auth = getAuth();
    const user = yield* call(signInWithEmailAndPassword, auth, email, password);
    let data = showPoints();
    data.then(points => {
      const singlePoints = points.filter(point => point.type === 'single');
      addSinglePointsAction(singlePoints);
    });
    yield put(UserActions.loginSuccessAction());

    navigate('/main');
  } catch (error: unknown) {
    const { message } = error as FirebaseError;
    yield put(UserActions.loginErrorAction(message.replace('Firebase: ', '')));
  }
}

function* SignUpWatcher() {
  yield takeEvery(UserActionTypes.SIGN_UP, SignUpWorker);
}
function* loginWatcher() {
  yield takeEvery(UserActionTypes.LOGIN, loginWorker);
}

export default function* userSaga() {
  yield all([SignUpWatcher(), loginWatcher()]);
}
