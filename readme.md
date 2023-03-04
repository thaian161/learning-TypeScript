### What is TS anyway?

- _Static Checking_: ts detetcs errors in our code without running it
- _Type Checking_: find erroa, analyzes our code, available in development only, for development purposes

### Installation

- Check out the [ts docs](https://www.typescriptlang.org/docs/)
- Run `npm i typescript --save-dev` to install on this folder alone or `npm i -g typescript` to install globally
- Run `tsc` to test if it works

### TypeScript Playground

- If you cannot install ts for any reason, use [TypeScript Playground](https://www.typescriptlang.org/docs/) to try thing out or practice ts

### Compile TS -> JS

- File with .ts ending
- To compile your ts code to js, run `tsc filename`

# SECTION 1: TYPE ANNOTATION BASICS

![Type Annotation](https://github.com/thaian161/learning-TypeScript/blob/main/docs/typeAnnotation.png)

- Assigning a basic type to variable by add `:Type` after variable name
- `type` need to be in all lowercase

  ```
  let myVar: type = value;

  const myVariable: string = 'This Is Awesome!!!';
  ```

## Numbers & Booleans

- All lowercase as well, just `number` and `boolean`

```
const myNum: number = 7;
const myBoolean: boolean = true;
```

## Compiling TS

- run `tsc` => we will see error shown in the terminal

## Type Inference

![Type Inference](https://github.com/thaian161/learning-TypeScript/blob/main/docs/TypeInference.png)

```
//Type Inference
let tvShow = 'Criminal mind';
tvShow = 'CSI';
tvShow = false; //warning error type
```



## Any Type

- When we don't annotate a variable's type AND we don't initialize it with a value, it has a type of "any"
- Allow you to use any types but it is sort of defeats the purpose of TS and types => use it sparingly

## Delayed Initialization & Implicit Any

```
const movies = ['Titanic', 'CSI', 'Criminal Minds'];

let foundMovie;

for (let movie of movies) {
  if (movie === 'CSI') {
    foundMovie === 'CSI';
  }
}
foundMovie();
foundMovie = 1; //foundMovie was inference as type any, in this case we wanna specifically asign type for foundMovie without using type inference
```

# SECTION 2: FUNCTIONS

![Functions](https://github.com/thaian161/learning-TypeScript/blob/main/docs/functions.png)
- set type for your function's param
- without setting type, your param's type will be set default as `any `

```
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
```

- We can also work with default params like so:
```
//set name = there if when called function greeting() but does not provide any param
function greeting(name: string = "there"){
  console.log("Oh hello ${name}")
}
greeting() // "Oh hello there"
greeting("Ann") // "Oh hello Ann"
```