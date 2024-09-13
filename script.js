

// define
const selectElement = document.getElementById('coffee_item');
const cartItems = document.getElementById('cart_items');

// Function to update cart
function updateCart() {
    const selectedItem = selectElement.value;
    if (selectedItem) {
        cartItems.textContent = selectedItem;
    } else {
        cartItems.textContent = 'None';
    }
}

// Add an event listener to the select element
selectElement.addEventListener('change', updateCart);

/* my code change 

function updatecart() {
    const selectedItem = selectElement.value;
    if (selectedItem.length>0) {
      cartitems = selectedItem;
      console.log(cartitems)
    }else{
      cartItems = "None";   
    }
}
*/