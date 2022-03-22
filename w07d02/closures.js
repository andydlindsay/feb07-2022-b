// memory, remembering what happened before
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//     console.log(this.count);
//   }
// }

// const counter = new Counter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

let count = 0;
let name = 'Alice';

const increment = () => {
  count++;
  console.log(count);
};

increment();
increment();
increment();
increment();
increment();
