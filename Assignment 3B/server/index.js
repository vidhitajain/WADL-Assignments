const express = require('express');
const bodyParser = require('body-parser');
const cors =  require('cors');
const mongoose =  require('mongoose');





main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('dbconnectted')
}

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  city: String
});

const User = mongoose.model('User', userSchema);

const server =  express();

server.use(cors());
server.use(bodyParser.json());
//CRUD - Create Register USER
server.post('/demo',async (req,res)=>{
  let user =  new User();
  user.username = req.body.name;
  user.password = req.body.password;
  user.city = req.body.city;
  const doc = await user.save();


 console.log(doc);
 res.json(doc);
})

server.get('/demo',async (req,res)=>{
   const docs = await User.find({});
   res.json(docs)
})

server.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      // User found and passwords match
      res.json({ message: 'Login successful' });
    } else {
      // User not found or passwords don't match
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    // Handle any errors that occur during the authentication process
    console.error('Failed to login:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});




server.listen(8080,()=>{
  console.log("server started")
})

