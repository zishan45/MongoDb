const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test'); // we can change the database test to college or whichever we need it...

main().then((res)=> {console.log("Connection Successful"); 
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