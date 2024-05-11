const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let j = 0;

const newFoodSchedule = [];
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    newFoodSchedule.push({ name: fruits[j], isVegan: true });
    j++;
  } else {
    newFoodSchedule.push(foodSchedule[i]);
  }
}

console.log(newFoodSchedule);