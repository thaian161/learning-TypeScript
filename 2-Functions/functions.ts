function cal(num: number){
  return num * num
}
cal(6) // good
cal("hello") // ts will complain 

function sayHello(name: string){
  console.log("Oh hello ${name}")
}
sayHello("Ann") //good
sayHello(777) // ts will complain 