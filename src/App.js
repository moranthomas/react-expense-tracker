import './App.css';

import { Header } from './components/Header.js';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance.js';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
    </div>
  );
}

export default App;
