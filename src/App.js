import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Bugs from './components/Bugs';
// import BugsList from './components/BugsList';

import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Bugs />
    </Provider>
  );
}

export default App;
