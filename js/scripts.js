/* BACK END LOGIC */
function Pizza() {
  this.size = [];
  this.toppings = [];
  this.price;
}; // End of the 'Pizza' constructor.

function Size(width, name, cost) {
  this.width = width;
  this.name = name;
  this.cost = cost;
}; // End of the 'Size' constructor.

function Topping(name, cost) {
  this.name = name;
  this.cost = cost;
}; // End of the 'Topping'  constructor.



/* FRONT END LOGIC */
$("#pizza-form").submit(function(event) {
  event.preventDefault();

}); // End of 'pizza-form' submit listener.
