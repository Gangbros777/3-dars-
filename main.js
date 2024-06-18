const Biography = {
  name: "John",
  age: 30,
  address: "New York"
};
for (const value of Object.values(Biography)) {
  console.log(value);
}