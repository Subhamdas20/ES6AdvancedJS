
class Node {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName() {
        return console.log(this.firstName)
    }
    getLastName() {
        return console.log(this.lastName)
    }
}
let node = new Node("Subham", "Das");
node.getFirstName();
node.getLastName();
