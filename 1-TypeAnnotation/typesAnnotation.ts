// Type string
let movieTitle: string = 'Titanic';

movieTitle = 'The Life of Jesus Christ'; // OK
movieTitle = 9; // TS error warning

// Type number & boolean
let myNum: number = 7;
const myBoolean: boolean = true;

myNum = 'hello';
myNum = 0.9;

//Type Inference
let tvShow = 'Criminal mind';
tvShow = 'CSI';
tvShow = false; //warning error type

//Any type
let thing: any = 'hello ';
thing = 1;
thing = false;
thing();
