import './App.css';

<<<<<<< HEAD
import { Header } from './components/Header.js';
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';
||||||| 97c9ed0... Adding all components
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';
=======
import {Header} from './components/Header.js';
import {Balance} from './components/Balance.js';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
>>>>>>> parent of 97c9ed0... Adding all components

function App() {
  return (
    <div>
        <Header />
        <div className="container">
<<<<<<< HEAD
          <AddTransaction />
||||||| 97c9ed0... Adding all components
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
=======
          <Balance />
          <IncomeExpenses />
          <TransactionList />
>>>>>>> parent of 97c9ed0... Adding all components
        </div>
    </div>
  );
}

export default App;
