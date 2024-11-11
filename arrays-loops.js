for (let i = 11; i <= 20; i++) {
    console.log(i);
  }
  
for (let j = 20; j >= 11; j--) {
    console.log(j);
  }

let vardi = ["Janis", "Peteris", "Kristaps", "Edgars", "Miks"];

let vards1 = vardi[0];
let vards2 = vardi[2];

let varduskaits = vardi.length;

for(let i = 0; i < varduskaits; i++){
    console.log(`${i + 1}. ${vardi[i]}`);
}


console.log(vards1," ", vards2);
console.log(varduskaits);