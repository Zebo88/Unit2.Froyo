/**** Block 15 Workshop: Froyo Orders ****/

/* 1. Prompt the user to enter their froyo flavors for their order in a list
      Ensure user enters their order with commas separating their list. */
const userInput = prompt("Please enter your froyo flavors as a list, separating your items with a comma and no spaces:", "vanilla,chocolate,peppermint").split(",");

// 2. Check each flavor for multiples and store them in an object "order"
const order = {};

// 3. Loop to obtain the elements of the userInput array and check for multiples.
for (let i = 0; i < userInput.length; i++){
  //If-else checks each element of userInput to see if it is undefined (it doesn't exist as a key in the order object).
  if (order[userInput[i]] === undefined){
    order[userInput[i]] = 1;//If true, then add the element as a key in the order object.
  }else{
    order[userInput[i]]++;//If false, increment the value of this key.
  }
}

// 4. Print the user's order in a table format:
console.table(order);

/**** End of Program ****/