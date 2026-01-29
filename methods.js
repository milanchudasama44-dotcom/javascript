//string
//length()
//trim()
//toupper case()
//to lower case()
//includes()
//indexof()
//slice()
//substring()
//replace()
//concat()
//split()

let str = "Hello javascript world"
console.log(str)
console.log("length() :",str.length);

 let trimText = str.trim();
console.log("trim() :",trimText)


console.log("toUpperCase() :", str.toUpperCase())

console.log("toLowerCase():", str.toLowerCase())


console.log("includes() :",str.includes("test"))
console.log("indexof():",str.indexOf("javascript"))

console.log("slice():",str.slice(2,7))
console.log("substring():",str.substring(2,7))

console.log("replace():",str.replace("word", "js"))


let extraRext = "HELLO JS";
console.log("Concat : ",str.concat(extraRext))



console.log("Split :",str.split(" "));