function getLaptop(make, model, year) {
    return {
        make,
        model,
        year
    }
}
console.log(getLaptop("Asus", "vivobook", "2015"))


var o = { p: "login", q: true };
var { p, q } = o
console.log(p);
console.log(q);
