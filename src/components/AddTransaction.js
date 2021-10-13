<<<<<<< HEAD
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { web3TradeExample } from './web3TradeExample'
||||||| 97c9ed0... Adding all components
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
=======
import React from 'react'
>>>>>>> parent of 97c9ed0... Adding all components

export const AddTransaction = () => {
<<<<<<< HEAD

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }

console.log(newTransaction)

web3TradeExample();

        //addTransaction(newTransaction);
    }

||||||| 97c9ed0... Adding all components

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

=======
>>>>>>> parent of 97c9ed0... Adding all components
    return (
        <>
            <form>
                <div className="form-control">
<<<<<<< HEAD
                    <label htmlFor="text">Trade Token</label>
                    <input type="text" value={text} onChange={
                        (e) => setText(e.target.value)}
                        placeholder="Enter trade amount...">
                    </input>
||||||| 97c9ed0... Adding all components
                    <label htmlFor="text">Add Description </label>
                    <input type="text" value={text} onChange={
                        (e) => setText(e.target.value)}
                        placeholder="Enter text...">
                    </input>
=======
                    <label for="text">Text</label>
                    <input type="text" placeholder="Enter text..."></input>
>>>>>>> parent of 97c9ed0... Adding all components
                </div>
<<<<<<< HEAD
                <button className="btn">Send transaction</button>
||||||| 97c9ed0... Adding all components
                <div className="form-control">
                    <label htmlFor="amount">Add Amount <br/>
                    (negative for  expense, positive for income)
                    </label>
                    <input type="number" value={amount} onChange={
                        (e) => setAmount(e.target.value)} placeholder="Enter amount..."  />
                </div>
                <button className="btn">Add transaction</button>
=======
                <div className="form-control">
                    <label for="amount">Amount <br/>
                    (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
>>>>>>> parent of 97c9ed0... Adding all components
            </form>
        </>
    )
}
