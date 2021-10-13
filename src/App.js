import './App.css';

import { Header } from './components/Header.js';
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <Header />
        <div className="container">
          <AddTransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;
