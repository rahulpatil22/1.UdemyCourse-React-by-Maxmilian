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