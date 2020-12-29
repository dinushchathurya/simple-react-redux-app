import React from 'react';
import Auth from './components/Auth';
import Balance from './components/Balance';
import Banking from './components/Banking';

const  App = () => {
    return (
        <div>
           <Auth /> 
           <Balance />
           <Banking />
        </div>
    )
}

export default App;