/* BACK END LOGIC */
function Pizza() {
  this.type = "cheese";
  this.sizes = [];
  this.toppings = [];
  this.price;
}; // End of 'Pizza' constructor.
function Size(diameter, price) {
  this.diameter = diameter;
  this.price = price;
}; // End of 'Size' constructor.
function Topping(topping, price) {
  this.topping = topping;
  this.price = price;
}; // End of 'Topping' constructor.
Pizza.prototype.pushSizesArray = function(size) {
	this.sizes.push(size);
}; // End of Pizza 'pushSizesArray' prototype.
Pizza.prototype.pushToppingsArray = function(topping) {
  this.toppings.push(topping);
}; // End of Pizza 'pushToppingsArray' prototype.
Pizza.prototype.priceToppings = function () {
  var lengthToppings = this.toppings.length;
  for(i = 0; i < lengthToppings; i++) {
    this.price += this.toppings[i].price;
  }; // End of the 'Pizza.toppings[]' for-loop.
}; // End of the Pizza 'priceToppings' prototype.
Pizza.prototype.priceSize = function () {
  var lengthSizes = this.sizes.length;
  for(i = 0; i < lengthSizes; i++) {
    this.price += this.sizes[i].price;
  }; // End of the 'Pizza.sizes[]' for-loop.
};

/* FRONT END LOGIC */
$(document).ready(function(){
  var newPizza = new Pizza();

  var customPizza = [];

  $("#pizza-form").submit(function(event){
    event.preventDefault();
    // Pizza sizes
    var smallPizza = new Size(12, 14.00);
    var mediumPizza = new Size(15, 17.00);
    var largePizza = new Size(18, 20.00);

    // Pizza topping options
    var toppingAnchovy = new Topping("Anchovy", 0.50);
    var toppingArtichoke = new Topping("Artichoke", 0.75);
    var toppingPepperoni = new Topping("Pepperoni", 1.00);
    var toppingPineapple = new Topping("Pineapple", 1.50);
    var toppingMushroom = new Topping("Mushroom", 1.75);

    var selectedSize = $("#pizza-size").val()
    var toppingsArray = [];
    var lengthToppingsArray = toppingsArray.length;
    // Creat new Piiza object.
    // var newPizza = new Pizza();
    // push selected size to new Pizza object sizes array.
    var pizzaSize = function(selectedSize) {
      if (selectedSize === "1") {
        newPizza.sizes.push(smallPizza);
        console.log("small pizza");
      } else if (selectedSize === "2") {
        newPizza.sizes.push(mediumPizza);
        console.log("medium pizza");
      } else if (selectedSize === "3") {
        newPizza.sizes.push(largePizza);
        console.log("large pizza");
      } else {
        console.log("Error! No size selected");
      }
    }
    // Push selected toppings to the Pizza object toppings array.
    var pizzaToppings = function() {
      $("input[name='topping[]']:checked").each(function () {
        newPizza.toppings.push(parseInt($(this).val()));
      });
    };

    pizzaSize(selectedSize);
    pizzaToppings();

  }); // End of pizza-form 'submit' event.
}); // End of the document 'ready' listener.
