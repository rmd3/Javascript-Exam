var products = 
[
   ["product1", "Small Widget", "159753", 33, 22],
   ["product2", "Medium Widget", "258456", 55, 44],
   ["product3", "Large Widget", "753951", 77, 88],
   ["product4", "Not a Widget", "852654", 11, 2],
   ["product5", "Could be a Widget", "654456", 99, 6],
   ["product7", "Ultimate Widget", "321456", 111, 66],
   ["product6", "Jumbo Small Medium Widget", "987456", 88, 11]
   
]
var numOfProducts = 0;
var totalInventoryValue = 0;
var inventoryPrice;
var inventoryValue = 0;
function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();
  for (var key of data) {
    var th = document.createElement("th");
	if (key == 0) {
		var text = document.createTextNode("Name");
		th.appendChild(text);
		row.appendChild(th);
	}
	else if (key == 1) {
		var text = document.createTextNode("ID");
		th.appendChild(text);
		row.appendChild(th);
	}
	else if (key == 2) {
		var text = document.createTextNode("Description");
		th.appendChild(text);
		row.appendChild(th);
	}
	else if (key == 3) {
		var text = document.createTextNode("Price");
		th.appendChild(text);
		row.appendChild(th);
	}
	else if (key == 4) {
		var text = document.createTextNode("Inventory Amount");
		th.appendChild(text);
		row.appendChild(th);
	}
  }
}

function generateTable(table, data) {
  for (var element of data) {
    var row = table.insertRow();
    for (key in element) {
      var cell = row.insertCell();
	  if (key == 3) {
		var text = document.createTextNode("$");
        cell.appendChild(text);
		inventoryPrice = element[key]
	  }
      var text = document.createTextNode(element[key]);
      cell.appendChild(text);
	  if (key == 4) {
		  inventoryValue = inventoryPrice * element[key];
		  totalInventoryValue += inventoryValue;
	  }
	  if (key == 4 && element[key] < 20) {
		  cell.style.backgroundColor = "#FA8072";
	  }
    }
	numOfProducts++;
  }
}

var table = document.querySelector("table");
var data = Object.keys(products[0]);
generateTableHead(table, data);
generateTable(table, products);
document.getElementsByTagName("p")[0].innerHTML = "There are " + numOfProducts + " different products.";
document.getElementsByTagName("p")[1].innerHTML = "The total value of the inventory is $" + totalInventoryValue + ".";