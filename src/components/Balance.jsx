import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.css';

const Balance = () => {

    const store = useSelector((state) => state);
    
    return (
        <div className="balance_container">
           <h2>${store}</h2>
        </div>
    )
}

export default Balance;