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

//

const user ={
    name: "user",
    role: "admin",
    designation: "developer",
    age:24,
    address:{
        city: "junagadh",
        xipcode: '362001',
        street:"123 main st."
    }
}
// const {name, age, role}=user
// console.log(name,age,role)
 
// const {name : profilename,age: profileage}=user
// console.log(profilename,profileage)

const {name, age, role,state = "gujarat"}=user
console.log(name,age,role,state)

const array = [1,2,3]
const moreelements = [...array,4,5,6]
console.log(moreelements)


const originalarray = [1,2,3]
const copiedarray = [...originalarray]
console.log(copiedarray)


const arr1 = [1,2,3]
const arr2 = [4,5,6]
const mergedarray = [...arr1,...arr2]
console.log(mergedarray)

//spread opt. in obj

const user1 = {
    name: "user1",
    city: "junagadh"
}
console.log(user1)

const newobj = {
    ...user1,
    role:"react developer",

}
console.log(newobj)

//copy obj
const user2 = {
    name: "user2",
    city: "junagadh"
}
const user3 = {...user2}
console.log(user3)

//merge obj
const obj1 = {
    name: "name",
    age: 20
}
const obj2 ={
    city: "junagadh",
    state: "gujarat",
    age: 30
}
const obj3 = {...obj1, ...obj2}
console.log(obj3)