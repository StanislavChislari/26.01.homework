let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let suma = 0;
for (let key in salaries) {
  suma += salaries[key];
}
console.log("Totalul salariului este: ", suma)
document.write("Totalul salariului este: ", suma); 