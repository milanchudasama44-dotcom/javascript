// object is the collection of any type of data
const person ={
    name : 'testing',
    age:24,
    hobbies: ['cricket','listen music'],
    greet: function(){
        console.log("hello")
    }
}
console.log(person.name)
console.log(person['name'])

//adding or modifying the data  of obj
person.job ="react developer"
person.salary = 50000
console.log(person)

delete person.salary
console.log(person)

//nested object
const person1 ={
    name: 'john',
    age: 30,
    address: {
        city: "junagadh",
        xipcode: '362001',
        street:"123 main st."
    }
}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))