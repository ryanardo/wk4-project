/* BACK END LOGIC */
// Constructor: 'Pizza'
function Pizza() {
  this.size = [];
  this.toppings = [];
  this.price;
}; // End of the 'Pizza' constructor.
// Constructor: 'Size'
function Size(name, width, costSize) {
  this.width = width;
  this.name = name;
  this.costSize = costSize;
}; // End of the 'Size' constructor.
// Constructor: 'Topping'
function Topping(name, costTopping) {
  this.name = name;
  this.cost = costTopping;
}; // End of the 'Topping'  constructor.
// Prototype: 'priceSize'
Pizza.prototype.priceSize = function () {
  for(i = 0; i < this.sizes.length; i++) {
    this.price += this.sizes[i].price;
  }; // End of the 'Pizza.sizes[]' for-loop.
};
// Prototype: 'priceToppings'
Pizza.prototype.priceToppings = function () {
  for(i = 0; i < this.toppings.length; i++) {
    this.price += this.toppings[i].price;
  }; // End of the 'Pizza.toppings[]' for-loop.
}; // End of the Pizza 'priceToppings' prototype.

/* FRONT END LOGIC */
$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    var toppings = [];
    var selectedSize = $("#pizza-size").val();

    var newPizza = new Pizza();

    var smallPizza = new Size("small", 12, 15.00);
    var mediumPizza = new Size("medium", 15, 17.00);
    var largePizza = new Size("large", 18, 20.00);

    var anchovy = new Topping("anchovy", 1.50);
    var artichoke = new Topping("artichoke", 1.25);
    var pepperoni = new Topping("pepperoni", 1.75);
    var pineapple = new Topping("pineapple", 2.00);
    var mushroom = new Topping("mushroom", 1.00);
  }); // End of 'pizza-form' submit listener.
}); // End of document 'ready' listener.
