function add(a, b) {  //js is dynamically typed this function is does not expect any particlaur types,it just knows that it will recieve two parameters,
    return a + b;  //that code happens to wrok with number, but this code also happens to work with strings
  }
  
  const result = add('2', '5'); // here we converted number into string.we get string instead of number,and we get output 25 instead of 7.bcoz now plus opeartor does not add these two arg in math way
  // instead its concatinate two strings,bcoz its recieves two string here,thats shows js is okay,but not best
  //having static typing could enhance our code and prevent error like this
  //error-in bigger projects nothing is warning you that this is not how you should use this function,nothing is telling youn that this function actually wants two numbers instead of two strings or any values
  //thats where typescript can help us
  console.log(result);