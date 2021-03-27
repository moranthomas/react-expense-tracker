import React from 'react'

export const AddTransaction = () => {
    return (
        <>
            <form>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" placeholder="Enter text..."></input>
                </div>
                <div className="form-control">
                    <label for="amount">Amount <br/>
                    (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
