import {useState} from 'react';
import Button from './Button';
import Display from './Display';

// let count = 0;

const Counter = () => {
  // const arr = useState(0);
  // const count = arr[0]; // getter
  // const setCount = arr[1]; // setter

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');

  const increment = () => {
    // count++; // this is bad!
    setCount(count + 1);
    console.log(count);

    setName('Bob');
    console.log(name);
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      {/* <h2>The current count is {count}</h2> */}
      <Display count={count} />
      {/* <button onClick={increment}>Increment</button> */}
      <Button myFunc={increment}>Plus One!</Button>
      {/* <Button myFunc={setCount}>Plus One!</Button> */}
    </div>
  );
};

export default Counter;
