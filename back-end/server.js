const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const UserSchema = require('./models/Users');

const app = express();
app.use(bodyParser.json());

const database = {
   users: [
      {
         id: 100,
         name: 'Md',
         email: 'md@gmail.com',
         password: 'pass123',
         entries: 0,
         joinded: new Date()
      },
      {
         id: 101,
         name: 'John',
         email: 'john@gmail.com',
         password: 'pass101',
         entries: 0,
         joinded: new Date()
      }
   ]
}

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
   console.log('DB connected')
);


app.post('/signin', (req, res) =>{
   if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
      res.json("sucess");
   } else {
      res.status(400).json('error loggin in');
   }
});

app.post('/register', (req, res) =>{
   console.log(req.body);
   const post = new UserSchema({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
   })

   post.save()
   .then(data => {
      res.json(data);
   })
   .catch(err => {
      res.json({message: err})
   })
   
   // res.json(req.body);
});

app.get('/', (req, res) => {
   res.send('this is working');
})

app.listen(4000, ()=> {
   console.log('app is running on port 4000')
})


/*
Plan;
/ --> res = this is working
/signin --> POST = sucess/fail
/register --> POST = user
/profile:userId --> GET = user
/image --> PUT --> user
/entries --> PUT
*/