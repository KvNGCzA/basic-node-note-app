let square = x => x * x
console.log(square(9));

let user = {
    name: "Chris",
    sayHiAlt () {
        console.log(`Hi. I'm ${this.name}`);
    }
}
user.sayHiAlt();