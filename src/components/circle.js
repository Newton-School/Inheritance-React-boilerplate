// import 
import Shape from './shape';

// declare class
class Circle extends Shape{
    constructor(color, shape, radius){
        super(color, shape);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}


// export
export default Circle;

