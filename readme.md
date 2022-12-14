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

# First Type Annotation

![Type Annotation](https://github.com/thaian161/learning-TypeScript/blob/main/docs/typeAnnotation.png)

- Assigning a basic type to variable by add `:Type` after variable name
  ```
  const myVariable: string = 'This Is Awesome!!!';
  ```
