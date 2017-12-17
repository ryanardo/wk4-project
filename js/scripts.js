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

Pizza.prototype.priceSize = function () {
  for(i = 0; i < this.sizes.length; i++) {
    this.price += this.sizes[i].price;
  }; // End of the 'Pizza.sizes[]' for-loop.
};

Pizza.prototype.priceToppings = function () {
  for(i = 0; i < this.toppings.length; i++) {
    this.price += this.toppings[i].price;
  }; // End of the 'Pizza.toppings[]' for-loop.
}; // End of the Pizza 'priceToppings' prototype.

/* FRONT END LOGIC */
$("#pizza-form").submit(function(event) {
  event.preventDefault();

}); // End of 'pizza-form' submit listener.
