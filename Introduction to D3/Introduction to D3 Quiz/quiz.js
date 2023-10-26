/*
Q. True or False: The selection is returned as an array.
A. False
*/

/*
Q. If there are already two div elements inside the #visualization element in the DOM, how many elements will be inserted into the DOM?
const data = [8,2,9,29]
d3.select('#visualization')
  .selectAll('div')
  .data(data)
  .enter()
  .append("div");
A. Only two div elements will be added.
*/

/*
Q. Which function adds new elements to the DOM?
A. .append()
*/

/*
Q. What exactly is the data bound to in D3 when you use .data() on a selection?
A. The DOM elements in the selection as a _data_ attribute.
*/

/*
Q. Assuming there are no div elements inside #viz, how many elements would the following code append as children of #viz?
const dataset = [13.2,232.3,67.3]
d3.select("#viz")
  .data(dataset)
  .append("div");
A. Only one element will be inserted because all of the commands in the chain only get executed once after the .select() method.
*/

/*
Q. What does your code need to do to in order to access the datum inside each element in the chain?
A. Create a function that takes in at least one parameter, the datum will always be assigned to the first parameter. It is standard to name that parameter d but not required.
*/

/*
Q. What will be displayed in the third paragraph in the DOM based on the following code?
const data = ["potato", "apple", "avocado", "corn", "pumpkin"]

d3.select("#viz")
  .selectAll("p")
  .data(data)
  .enter()
  .append("p")
  .text(function(d){return d;});
A. “avocado”
*/
