// const Rectangle = class {
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.extraStuff = 'non-user input';

    this.area = this.area.bind(this);
  }

  area() {
    return this.height * this.width;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle);
console.log(rectangle.area());

let area = rectangle.area;
// area = area.bind('')
console.log(area());

class RectangularPrism extends Rectangle {
  constructor(width, height, length) {
    super(height, width);

    this.length = length;
  }

  area() {
    // do something
    // console.log('this one');
    return 'this one!!!!'
  }

  volume() {
    return this.area() * this.length;
  }
}

const prism = new RectangularPrism(3, 4, 5);
console.log(prism);
console.log(prism.area());
