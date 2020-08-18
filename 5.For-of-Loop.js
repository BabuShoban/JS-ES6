//for of loop

const students = [
  { name: "john", city: "paris" },
  { name: "peter", city: "NewYork" },
  { name: "Kate", city: "Sidney" },
];

for (const student of students) {
  const { name, city } = student;
  console.log(`${name} is lives in ${city} `);
}
