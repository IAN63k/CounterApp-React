import { useState } from 'react'; // Hook
import ProTypes from 'prop-types';


const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);
    const handleSubtract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value  );


    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: ProTypes.number.isRequired
}


export default CounterApp;
