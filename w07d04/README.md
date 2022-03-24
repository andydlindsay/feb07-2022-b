# W07D04 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Rules for Hooks
* can't be called conditionally
* called from within a React function (component or a custom hook)
* have to start with `use`

### Pure Functions
* no side effects
* return the same value given the same arguments

```js
let additionVal = 12;
let externalVal = 5;

const addTwo = (num) => {
  const returnVal = num + additionVal;
  console.log(returnVal);
  externalVal = 10;
  return returnVal;
};
```

### potential side effects
* console.log
* data fetching
* set timers and intervals
* set up a websocket connection









