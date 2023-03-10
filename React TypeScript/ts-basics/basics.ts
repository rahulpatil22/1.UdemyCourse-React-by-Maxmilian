//Primitives: number,string ,boolean

//Function types,parameters

//primitives
let age:number =24;
age = 12;

let userName:string;
userName = 'Max';

let isInstructore:boolean;
isInstructore = true ;

//More complex types: arrays ,objects

let hobbies: string[]; //assign a array of string 
hobbies=['Sports','Cooking'];

//types for object
let person:{                    //defining a type of object
name:string;
age:number;
}; //in this we want to store below person object

person ={
name:'Sachin',
age:50
}

let people :{  //array full of people, seeting the type of people to person object type, //so repeating this object type as an array by adding square bracket thereafter
name:string;
age:number;
}[]; //in people i dont wanna store a single object of that structure but an array of such

//Type Inference -create variable and immediatly assign an initial value . there is no need of second step to assign a value.

let course = 'React' //in course variable we store a name of course
//course = 1 // course id is not assignable to type string, we need to define type first for course

// by default typescript try to infern as many types as possible,it tries to know which types are used where, without you explicitely stating those types,we need to write less code
//if assign type manually as let course:string, its a redundant, beacuse if you immediatly initialise this variable with a type, typescript will look at the value type (React).
// so it will see that we stored a string in that variable and  it will then use that value type  as an infererred type for this variabe(course)
// and if you then try to assign a different type thereafter, will get an error because of type inference.and try to stick with that.rather than using explicitly type

//Union Types- the scenario that you have more than one type which you want to allow, featured called union types

let Course:string | number | boolean = 'React' //it is not redundant if u are not using type inferen, union type using | pipe symbol
Course = 1;

//Type Aliases-somtimes we repeat a type defination ex- let person and let people object above, both object type is same,here we duplicate the type defination, but avoid that duplication
//for that we used a type alias with type keyword

type Person =  {           //right side value is not js ,its a type defination ,use Person instead of people as above
    name:string;
    age:number;
}  
let person1:Person;  //this Person type , it will define once but can use it many places where i need it
let person2:Person[];  // or use like as an array of full of persons 


//functions and types
function Add(a:number ,b:number):number {
return a + b;  // infererred return value type:number
}
function printout(value:any):void {
console.log(value);  // this function has nothing to return = so function type is void
}

//Generics
function inserAtBeginning<T>(array:T [],value:T){  //utility function
const newArray = [value,...array];
return newArray;
}

const demoArray = [1,2,3];
const updatedArray = inserAtBeginning(demoArray,-1); //{-1,1,2,3}

// after wanna do things with that array, which we can do with an array full of numbers.the propble is that updated array,is inferred to be type of any array
//so an array full of any kind of values,typescript here doesn't pick up that its an array full of numbers beacuse we define array as any type
//and we cant say that we only allow numbers here,beacuse if we want to use this utility function with an array full strings? so we need any but at the same time
//that kind of removes all kind of Typescript support we might be getting after calling this function, we not getting any good Typescript support
// for updatedArray thereafter, becuase that is an inferred to be an array full of any kind of objects or values and thats not useful
// so work around with this kind of problem is- Generics
// with this Generics feature we can convert this function(utility function) to a generic function with syntax <T>
// using Generic feature we telling typescript that the type here is actaully not any type,it not any kind of value
//instead we tell it that the type of this array and of this value should be the same just that this is an array, but it is an array full of the same types of values as this single value has it
// this feature help us write type safe code and flexible