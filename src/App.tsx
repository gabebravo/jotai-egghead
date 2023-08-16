import './App.css';

import { createStore, Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import AllRoutes from './components/Routes';

const customStore = createStore();

const App = () => {
  return (
    <Provider store={customStore}>
      <DevTools store={customStore} />
      <div className="root">
        <AllRoutes />
      </div>
    </Provider>
  );
};

export default App;
