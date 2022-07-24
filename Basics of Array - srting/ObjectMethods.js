const namee = ["amol", "rakesh", "suman", "malhar"];
const subject = ["math", "english", "PT", "Music"];
const marks = [23, 56, 89, 65];
let output = [];
const CombinedData = (namee, subject, marks) => {
  output = namee.map((item, index) => {
    return { name: item, subject: subject[index], mark: marks[index] };
  });
  return output;
};
console.log(CombinedData(namee, subject, marks));
const getNames = (output) => {
  let namesData = output.map((item) => item.name);
  return namesData;
};
console.log(getNames(output));
