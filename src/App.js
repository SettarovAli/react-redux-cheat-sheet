import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import BugsList from './components/BugsList';

import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BugsList />
    </Provider>
  );
}

export default App;
