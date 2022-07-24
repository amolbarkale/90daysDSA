// Q] Check if array has every element in another array.

const checkPlatForm = ["pizza", "cola"];
const platform_name = ["pizza", "cake", "amol", "Samadhan", "Barkale", "cola"];

// const containsAll = checkPlatForm.every((element) => {
//   return platform_name.includes(element);
// });
let ans = platform_name.filter((itm) =>
  [itm].every((ele) => checkPlatForm.includes(ele))
);
console.log("ans:", ans);

//console.log(containsAll); // 👉️ true
////////////////////////////////////////////////////////////////////////////////////

// Supported in IE 9-11
const data1 = ["pizza", "cola"];
const data2 = ["pizza", "cake", "cola"];

const containsAllEle = data1.every((element) => {
  return data2.indexOf(element) !== -1;
});

// console.log(containsAllEle); // 👉️ true
