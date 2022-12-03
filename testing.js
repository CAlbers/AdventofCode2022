let answers = ["A", "C", "B", "B", "B"];

let dict = { A: 1, B: 2, C: 3};

let dict2 = {
    "color": "red",
    1: {"A": 12, "B": 14, "C": 90},
    1.2: 123,
} 
let score = 0;

answers.forEach(answer => {
    score += dict[answer]
});

let splitting = "Hallo";

console.log(splitting.split("all"));

console.log(dict2[1]["C"]);

console.log(dict.A);