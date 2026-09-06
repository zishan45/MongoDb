const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test'); // we can change the database test to college or whichever we need it...

main().then((res)=> {console.log("Connection Successful") 
})
.catch(err => console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema =new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "Zishan",
//   age: 21,
//   email: "zishanahmed.official@gmail.com",
// });

// user1.save();

// const user2 = new User({
//   name: "Vishal",
//   age: 23,
//   email: "vishal.kumar@gmail.com",
// })

// user2.save().then(res => {
//   console.log(res);
// })
// .catch((err) => {      //if any error then catch it
//   console.log(err);
// });

// User.insertMany([
//   {name: "Sujeet", age: 23, email: "sujeet.kumar.hazam@gmail.com"},
//   {name: "Umang", age: 21, email: "umang.van@gmail.com"},
//   {name: "varun", age: 22, email: "varun.kumar@gmail.com"},
// ]).then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });


// User.insertOne({name: "Tushar", age: 21, email: "tushar.verma@gmail.com"})
// .then((data) => {
//   console.log(data);
// })

User.insertMany([
  {name: "Sujeet", age: 24, email: "sujeet.kumar.hazam@gmail.com"},
  {name: "Umang", age: 21, email: "umang.van@gmail.com"},
  {name: "Varun", age: 22, email: "varun.kumar@gmail.com"},
  {name: "Vishal", age: 23, email: "vishal.kumar@gmail.com"},
  {name: "Zishan", age: 21, email: "zishan.ahmed@gmail.com"},
]).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

// User.deleteMany({name: "Umang"}).then((res) => {
//   console.log(res);
// });