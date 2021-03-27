import './App.css';

import {Header} from './components/Header.js';
import {Balance} from './components/Balance.js';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
        </div>
    </div>
  );
}

export default App;
