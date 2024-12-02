//OPP _object orient programing

class Rectangle {
    //factory that makes the instance
    constructor(height, width) {
        //me myself and I
        // the instance is called by the keywors "this"
        //properties:
        this.height = height;
        this.width = width;
    }

    //method - a function inside a class
    getArea(){
        return this.height * this.width;
    }
}

//create a new instance and assign it to the r variable.
let r = new Rectangle(12, 12);
//call/involve r's in herited getArea() method
console.log(r.width, r.height, r.getArea());

let s = new String();
console.log(s.length);

let t = "";//new string("")
console.log(t.length);

let n = new Number();
console.log(n, n.toFixed(3));

let m = 0;
console.log(m, m.toFixed(3))