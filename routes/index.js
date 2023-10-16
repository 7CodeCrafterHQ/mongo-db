var express = require('express');
var router = express.Router();
var mongodb = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/create', async function(req, res) {
  var user = await mongodb.create({
    username:"Shivam",
    name:"alok rathore",
    age:21,
    email:"alokrathour810@gmail.com", 
  });
  console.log(user)
  res.send(user);
});


router.get("/update",async (req,res)=>{
  var userUpdate = await mongodb.updateOne({username:"Shivam weds keshar"},{username:"Shivam weds keshar",age:30});
  console.log(userUpdate);
  res.send(userUpdate);
})

router.get("/delete",async (req,res)=>{
  // var userDelete = await mongodb.deleteMany({username:"alok"})
  var userDelete = await mongodb.deleteOne({username:"Shivam weds keshar"})
  res.send(userDelete)
})

// finnd route 
router.get("/find",async (req,res)=>{
  var userFind = await mongodb.find({username:"Shivam"})
  res.send(userFind);
})

module.exports = router;
