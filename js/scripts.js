/* BACK END LOGIC */
/* variable/array notes
toppings: ["anchovy", "artichoke", "cheese", "pepperoni", "pineapple", "mushroom"];
size: ["12-inch", "15-inch", "18-inch"];
*/
//Global variables
function Pizza() {
  this.type = "cheese";
  this.sizes = [];
  this.toppings = [];
}; // End of 'Pizza' constructor.

function Size(diameter, price) {
  this.diameter = diameter;
  this.price = price;
}; // End of 'Size' constructor.

function Topping(topping, price) {
  this.topping = topping;
  this.cost = price;
}; // End of 'Topping' constructor.




/* FRONT END LOGIC */
