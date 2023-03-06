function add (a:number, b:number){  //typescript annotation with function parameters 
    return a + b; 
}
const result = add ('2', '5');  //here we want two parameters should be a number, thats why already get an error,thats how we catch an error, before run and test code.
//its shows error while writing code, not on runtime.thats why typescript is best at way
console.log(result);
export {};