function cal(num: number){
  return num * num
}
cal(6) // good
cal("hello") // ts will complain 

//-----------------------------------------------------

function sayHello(name: string){
  console.log("Oh hello ${name}")
}
sayHello("Ann") //good
sayHello(777) // ts will complain 

//-----------------------------------------------------

const doSomething =( person: string, age:number, isFunny:boolean) =>{

}
doSomething("Ann", 7, true) // good
doSomething("Ann", true, true) 
doSomething("ann")

//-----------------------------------------------------

//set name = there if when called function greeting() but does not provide any param
function greeting(name: string = "there"){
  console.log("Oh hello ${name}")
}
greeting() // "Oh hello there"
greeting("Ann") // "Oh hello Ann"