import {useEffect, useState} from 'react';

const SideEffects = () => {
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  // useEffect(() => {}, []);

  useEffect(() => {
    console.log('the title has been updated');
    document.title = `new title ${counter}`;
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval fired', counter);
    }, 2000);

    const cleanup = () => {
      console.log('cleaning up');
      clearInterval(interval);
    };

    return cleanup;
  }, [counter]);

  return (
    <div>
      <h2>Side Effect component</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>

      <div>
        <h2>Search Term: {searchTerm}</h2>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SideEffects;
