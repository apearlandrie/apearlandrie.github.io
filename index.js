var product1 = document.getElementById("product1")
var qty1 = document.getElementById("qty1")
var price1 = document.getElementById("price1")

var product2 = document.getElementById("product2")
var qty2 = document.getElementById("qty2")
var price2 = document.getElementById("price2")

var product3 = document.getElementById("product3")
var qty3 = document.getElementById("qty3")
var price3 = document.getElementById("price3")

var product4 = document.getElementById("product4")
var qty4 = document.getElementById("qty4")
var price4 = document.getElementById("price4")

var carts = document.getElementById("carts")
var total = document.getElementById("total")
var cash = document.getElementById("cash")
var change = document.getElementById("change")

function addOrder( ) {
    carts.textContent=" "
    if (parseFloat(qty1.value) > 0) {
        var order=qty1.value.toString() + ' pc/s x ' + price1.textContent + '------' + product1.textContent + '------' + (parseFloat(qty1.value) *parseFloat(price1.Content)) + '\n'
        //carts.textContent += carts.value.toString () + '\n'
        carts.textContent += order
        }

    if (parseFloat(qty2.value) > 0) {
       var order=qty2.value.toString() + ' pc/s x ' + price2.textContent + '------' + product2.textContent + '------' + (parseFloat(qty2.value) *parseFloat(price2.Content)) + '\n'
       //carts.textContent += carts.value.toString () + '\n'
       carts.textContent += order
       }

    if (parseFloat(qty3.value) > 0) {
       var order=qty3.value.toString() + ' pc/s x ' + price3.textContent + '------' + product3.textContent + '------' + (parseFloat(qty3.value) *parseFloat(price3.Content)) + '\n'
       //carts.textContent += carts.value.toString () + '\n'
       carts.textContent += order
       }

   if (parseFloat(qty4.value) > 0) {
      var order=qty4.value.toString() + ' pc/s x ' + price4.textContent + '------' + product4.textContent + '------' + (parseFloat(qty4.value) *parseFloat(price4.Content)) + '\n'
      //carts.textContent += carts.value.toString () + '\n'
      carts.textContent += order
      }
}
qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
