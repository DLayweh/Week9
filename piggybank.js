//PIGGY BANK
// - content
// - insert(denom)
// - remove() //all
class piggyBank{
    constructor(){
        this.content += denom; 
    }
    remove(){
        const all = this.content;
        this.content = 0;
        return all;
    }
}

//test driven development
let p = new PiggyBank();
p.insert(25);
p.insert(25);
p.insert(25);
console.log(p.content === 75); //true? yes!
console.log(p.remove());
console.log(p.content === 0); //true? yes!