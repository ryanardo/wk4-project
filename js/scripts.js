/* BACK END LOGIC */
// Constructor for the 'Pizza' object.
function Pizza() {
  this.type = "cheese";
  this.sizes = [];
  this.toppings = [];
  this.price;
}; // End of 'Pizza' constructor.
// Constructor for the 'Size' object.
function Size(diameter, price) {
  this.diameter = diameter;
  this.price = price;
}; // End of 'Size' constructor.
// Constructor for the 'Topping' object.
function Topping(topping, price) {
  this.topping = topping;
  this.price = price;
}; // End of 'Topping' constructor.
// Prototype to push the 'Size' object to the 'Pizza.sizes' array.
Pizza.prototype.pushSizesArray = function(size) {
	this.sizes.push(size);
}; // End of Pizza 'pushSizesArray' prototype.
// Prototype to push the 'Topping' object to the 'Pizza.toppings' array.
Pizza.prototype.pushToppingsArray = function(topping) {
  this.toppings.push(topping);
}; // End of Pizza 'pushToppingsArray' prototype.
// Prototype for the 'Pizza' object that will
Pizza.prototype.priceToppings = function () {
  var lengthToppings = this.toppings.length;
  for(i = 0; i < lengthToppings; i++) {
    this.price += this.toppings[i].prices
  }; // End of the 'Pizza.toppings[]' for-loop.
}; // End of the Pizza 'priceToppings' prototype.


/* FRONT END LOGIC */
