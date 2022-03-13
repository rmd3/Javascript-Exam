window.addEventListener("load", setupCart);

function setupCart() {
  var addButtons = document.querySelectorAll(".addButton");
  for(var i = 0; i < addButtons.length; ++i){
    addButtons[i].onclick = addItem;
  }
}

function addItem(e) {
  var productItem = e.target.nextElementSibling;
  var productID = productItem.getAttribute("id");
  var productDescription = productItem.cloneNode(true);

  var cartBox = document.getElementById("cart");

  var duplicateOrder = false;
  for( var n = cartBox.firstElementChild; n!== null; n = n.nextElementSibling ){
    if(n.id === productID){
      duplicateOrder = true;
      n.firstElementChild.textContent++;
      break;
    }
  }

  if(duplicateOrder === false){
    var orderCount = document.createElement("span");
    orderCount.textContent = "1";
    productDescription.insertBefore(orderCount, productDescription.firstElementChild);
    cartBox.appendChild(productDescription);
  }
}