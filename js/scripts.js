/* BACK END LOGIC */
function Pizza(size, toppings) {
  this.size = [];
  this.toppings = [];
  this.price;
}; // End of the 'Pizza' constructor.




/* FRONT END LOGIC */
$("#pizza-form").submit(function(event) {
  event.preventDefault();

}); // End of 'pizza-form' submit listener.
