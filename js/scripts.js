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
  var
  



  $("#pizza-form").submit(function(event){
    event.preventDefault();
    var selectedSize = ;
    var selectedToppings = ;

}); // End of the document 'ready' listener.
// });
