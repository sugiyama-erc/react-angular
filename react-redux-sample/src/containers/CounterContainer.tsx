import { Counter } from './Counter';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { decrementAmount, incrementAmount } from '../modules/CounterModule';
import { ReduxAction, ReduxState } from '../store';

// Dispatcher が sotre に変更した値を Dispatch する。
export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {}

  public increment(amount: number) {
    this.dispatch(incrementAmount(amount));
  }

  public decrement(amount: number) {
    this.dispatch(decrementAmount(amount));
  }
}

// App に公開されている Counter コンポーネント Provider 
export default connect(
  (state: ReduxState) => ({value: state.counter}), // ①
  (dispatch: Dispatch<ReduxAction>) => ({actions: new ActionDispatcher(dispatch)}) // ②
)(Counter);
