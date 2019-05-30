import React from 'react';
import { Provider } from 'react-redux';
import QuestionBlock from "./pages/QuestionBlock"
import store from "./redux/store"
function App() {
  return (
    <Provider store={store} key="provider">
           <QuestionBlock/>
    </Provider>

  );
}

export default App;
