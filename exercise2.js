// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  //for (var i = 0; i < arr.length; i++) {
  arr.forEach(function (element) {
    if (element === "Waldo") {
      found([arr.indexOf(element)]);   // execute callback
    }
  })
}

function actionWhenFound(indexNumber) {
  console.log(`Found Waldo at index ${indexNumber}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);