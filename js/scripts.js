/* BACK END LOGIC */
// Constructor: 'Pizza'
function Pizza() {
  this.size = [];
  this.toppings = [];
  this.price = 0.00;
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
  this.costTopping = costTopping;
}; // End of the 'Topping'  constructor.
// Prototype: 'priceSize'
Pizza.prototype.priceSize = function () {
  for(i = 0; i < this.size.length; i++) {
    this.price += this.size[i].costSize;
  }; // End of the 'Pizza.sizes[]' for-loop.
};
// Prototype: 'sizeDisplay'
Pizza.prototype.sizeDisplay = function () {
  return this.size[0].name + ", " + this.size[0].width + " inch Pizza.";
};
// Prototype: 'priceToppings'
Pizza.prototype.priceToppings = function () {
  for(i = 0; i < this.toppings.length; i++) {
    this.price += this.toppings[i].costTopping;
  }; // End of the 'Pizza.toppings[]' for-loop.
}; // End of the Pizza 'priceToppings' prototype.
/* FRONT END LOGIC */
$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    var toppings = [];
    var selectedSize = $("#pizza-size").val();
    var newPizza = new Pizza();
    var smallPizza = new Size("Small", 12, 15.00);
    var mediumPizza = new Size("Medium", 15, 17.00);
    var largePizza = new Size("Large", 18, 20.00);
    var anchovy = new Topping("Anchovy", 1.50);
    var artichoke = new Topping("Artichoke", 1.25);
    var pepperoni = new Topping("Pepperoni", 1.75);
    var pineapple = new Topping("Pineapple", 2.00);
    var mushroom = new Topping("Mushroom", 1.00);
    var pizzaSize = function(selectedSize) {
      if (selectedSize === "inch12") {
        newPizza.size.push(smallPizza);
        console.log("inch12");
      } else if (selectedSize === "inch15") {
        newPizza.size.push(mediumPizza);
        console.log("inch15");
      } else if (selectedSize === "inch18") {
        newPizza.size.push(largePizza);
        console.log("inch18");
      } else {
        console.log("Error! No Pizza size selected.");
      }
    }; // End of the 'pizzaSize' function.
    var pizzaToppings = function() {
      $("input:checkbox[name=topping]:checked").each(function() {
           // toppings.push($(this).val());
           var checked = $(this).val();
           if (checked === "anchovy") {
             newPizza.toppings.push(anchovy)
           } else if (checked === "artichoke") {
             newPizza.toppings.push(artichoke)
           } else if (checked === "pepperoni") {
             newPizza.toppings.push(pepperoni)
           } else if (checked === "pineapple") {
             newPizza.toppings.push(pineapple)
           } else if (checked === "mushroom") {
             newPizza.toppings.push(mushroom)
           } else {
             console.log("Warning! No toppings selected.");
           }
      });
    }; // End of the  'selectedToppings' function.
    var toppingsDisplay = function() {
      $(".topping-display").remove();
      for(i = 0; i < newPizza.toppings.length; i++) {
        $("#toppings-output").append("<li class='topping-display'>" + newPizza.toppings[i].name + "</li>");
      }
    }
    pizzaToppings();
    pizzaSize(selectedSize);
    newPizza.priceSize();
    newPizza.priceToppings();
    // $("#size-output").append(newPizza.sizeDisplay);
    $("#size-output").text(newPizza.size[0].name + ", " + newPizza.size[0].width + " inch Pizza");
    toppingsDisplay();
    $("#price-output").text("$" + newPizza.price);




  }); // End of 'pizza-form' submit listener.
}); // End of document 'ready' listener.
