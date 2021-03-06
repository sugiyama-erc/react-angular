import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './containers/CounterContainer';
import store from './store';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  // createStoreで作成したストアのシングルトン(./store.ts)をProviderに渡す
  // Provider の定義  React.Component<ProviderProps, {}>
  // 
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
