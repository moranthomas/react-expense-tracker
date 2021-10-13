import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { web3TradeExample } from './web3TradeExample'

export const AddTransaction = () => {

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

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Trade Token</label>
                    <input type="text" value={text} onChange={
                        (e) => setText(e.target.value)}
                        placeholder="Enter trade amount...">
                    </input>
                </div>
                <button className="btn">Send transaction</button>
            </form>
        </>
    )
}
