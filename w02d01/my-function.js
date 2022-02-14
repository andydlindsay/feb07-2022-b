// console.log(arguments);

const sayHello = function (name) {
  // console.log(arguments);
  // console.log(`hello there ${name}`);
  return `hello there ${name}`;
};

// console.log(sayHello('Carol', 'Dean', 42));

// module.exports = sayHello;

// module.exports.sayHello = sayHello;
// module.exports.meaningOfLife = 42;

const thisThingThrows = () => {
  throw new Error();
};

module.exports = {
  sayHello: sayHello,
  addTwo: (num) => {
    return num + 2;
  },
  meaningOfLife: 42,
  thisThingThrows: thisThingThrows
};

// console.log(arguments);
