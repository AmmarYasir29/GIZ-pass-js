let fs = require("fs");

let numbers = [5, 8, 0, 1, 9, 11, 15, 16];
let mutable = numbers.slice();

console.log("Original numbers list: ", mutable);

function bblSortASC(arr) {
  // firt loop for check the last item
  for (let i = 0; i < arr.length; i++)
    // second loop for check the actual elem
    // The issue here in condition of end the loop
    for (let j = 0; j < arr.length - i - 1; j++)
      // If the condition is true then swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
  return arr;
}
function bblSortDESC(arr) {
  // firt loop for check the last item
  for (let i = 0; i < arr.length; i++)
    // second loop for check the actual elem
    // The issue here in condition of end the loop
    for (let j = 0; j < arr.length - i - 1; j++)
      // If the condition is true then swap them
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
  return arr;
}

function txt_file(input, output) {
  // Reading the text file
  let content = fs.readFileSync(input, "utf-8");
  //console.log(content);

  //convert the content of text into integer arr using parseInt(string, math numeral systems)
  let intArr = content.split(",").map(item => parseInt(item, 10));
  //sort it in ASC order
  intArr = bblSortASC(intArr);
  //console.log("arr: ", intArr);

  // converting the array numbers into string separated by comma & store it in a new file
  let strArr = intArr.join(",");
  fs.writeFileSync(output, strArr);
}

console.log("Numbers list After sorting: ", bblSortASC(mutable));
console.log("Numbers list After Desc sorting: ", bblSortDESC(mutable));
txt_file("data.txt", "output.txt");
