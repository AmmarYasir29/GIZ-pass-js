let numbers = [5, 8, 0, 1, 9, 11, 15, 16];
let mutable = numbers.slice();

console.log("Original numbers list: ", mutable);

function bblSortASC(arr) {
  // firt loop for check the last item
  for (var i = 0; i < arr.length; i++)
    // second loop for check the acuall elem
    // The issue here in condetion of end the loop
    for (var j = 0; j < arr.length - i - 1; j++)
      // If the condition is true then swap them
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
  console.log("Numbers list After sorting: ", arr);
}
function bblSortDESC(arr) {
  // firt loop for check the last item
  for (var i = 0; i < arr.length; i++)
    // second loop for check the acuall elem
    // The issue here in condetion of end the loop
    for (var j = 0; j < arr.length - i - 1; j++)
      // If the condition is true then swap them
      if (arr[j] < arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
  console.log("Numbers list After Desc sorting: ", arr);
}

bblSortASC(mutable);
bblSortDESC(mutable);
