import React from 'react';
import { Provider } from 'react-redux';
import QuestionBlock from "./builder/container/QuestionBlock"
import store from "./store/configureStore"
function App() {
  return (
    <Provider store={store} key="provider">
           <QuestionBlock/>
    </Provider>

  );
}

export default App;
