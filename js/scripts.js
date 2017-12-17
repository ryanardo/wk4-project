/* BACK END LOGIC */
function Pizza() {
  this.size = [];
  this.toppings = [];
  this.price;
}; // End of the 'Pizza' constructor.

function Size(width, name, costSize) {
  this.width = width;
  this.name = name;
  this.costSize = costSize;
}; // End of the 'Size' constructor.

function Topping(name, costTopping) {
  this.name = name;
  this.cost = costTopping;
}; // End of the 'Topping'  constructor.




/* FRONT END LOGIC */
$("#pizza-form").submit(function(event) {
  event.preventDefault();

}); // End of 'pizza-form' submit listener.
