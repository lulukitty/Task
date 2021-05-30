const shoppingList = [];

// Assignment of all global variables
const itemTitle = document.getElementById("first-box");

const itemQty = document.getElementById("second-box");

const itemDesc = document.getElementById("third-box");

const addBtn = document.getElementById("add-tocart");
const item1Summary = document.getElementById("item1-summary");

// funtion to push form items into array
/*function addItemHandler() {
    var allInput = `${itemTitle.value} ${itemQty.value} ${itemDesc.value}`
    shoppingList.push(itemTitle, itemQty, itemDesc);
    console.log(allInput.value)

}
addBtn.addEventListener("click", addItemHandler);*/

function addItemHandler() {
    const value1 = itemTitle.value;
    const value2 = itemQty.value;
    const value3 = itemDesc.value;
    const listElement = document.createElement("li1");
    listElement.innerText = `${value1} ${value3} ${value2}`
    item1Summary.appendChild(listElement);
}
addBtn.addEventListener("click", addItemHandler);

