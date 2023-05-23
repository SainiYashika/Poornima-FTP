let person = {
    name: "john",
    age: 30,
    city: "new york",
    hobbies: ["music", "gardening"], 
    display: function() {
        console.log("This is an object")
    }

}
console.log(person)
console.log(typeof(person))

//destructure object

let {name, age, city}=person
console.log(name)
console.log(age)

