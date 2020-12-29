import React , { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw, collectInterest, deleteAccount } from '../actions/bankingAction';

import styles from './styles.css';

const Banking = () => {

    const [amount, setAmount] = useState("");
    const dispatch = useDispatch();

    const handleDeposit = () => {
        dispatch(deposit(amount));
    };
    const handleWithdraw = () => {
        dispatch(withdraw(amount));
    };
    const handleInterest = () => {
        dispatch(collectInterest());
    };
    const handleDelete = () => {
        dispatch(deleteAccount());
    };

    return (
        <div className="form-group">
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" className="form-control" />
            <div className="control_buttons">
                <button onClick={handleDeposit} className="button btn btn-success">Deposit</button>
                <button onClick={handleWithdraw} className="button btn btn-primary">Withdraw</button>
                <button onClick={handleInterest} className="button btn btn-warning">Collect Interest</button>
                <button onClick={handleDelete} className="button btn btn-danger">Delete Account</button>
            </div>
        </div>
    )
}

export default Banking;