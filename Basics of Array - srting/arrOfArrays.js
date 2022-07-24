// ip = [[a,b],[c,d],[e,f]]
// op = [a,b,c,d,e]

var multiDimensionArray = [["a"], ["b", "c"], ["d"]];

var flatArray = Array.prototype.concat.apply([], multiDimensionArray);

console.log("flatArray:", flatArray);
