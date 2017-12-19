import counter, { CounterActions, CounterState } from './modules/CounterModule';
import { createStore, combineReducers, Action } from 'redux';

// ストアをシングルトンとして公開
export default createStore(
  // 複数の reducer を返せるように combineReducers でまとめる
  combineReducers({
    counter
  })
);

export type ReduxState = {
  counter: CounterState
};

export type ReduxAction = CounterActions | Action;