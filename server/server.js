const  express=require("express");
const mongoose=require("mongoose");
// 链接mongo,并且使用imooc这个集合
DB_URL="mongodb://localhost:27017/imooc";
mongoose.connect(DB_URL);
mongoose.connection.on("connected",function () {
   console.log("mongo connect success")
});
// 类似于mysql的表， mongo里有文档、字段的概念
const  User=mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true},
}));
// User.create({
//     user:"mingming",
//     age:14,
// },function (err,doc) {
//     if(!err){
//         console.log(doc)
//     }
//     else{
//         console.log(err);
//     }
// });
// 新建app
const  app=express();

app.get("/",function (req,res) {
    res.send("<h1>hello world</h1>")
});
app.get("/data",function (req,res) {
    User.find({},function (err,doc) {
       res.json(doc);
    });
    // res.json({name:"jm",age:"27"})

});
app.get("/delete",function (req,res) {
    User.remove({age:18},function (err,doc) {
        if(!err){
            res.json(doc);
        }
    });
    // res.json({name:"jm",age:"27"})
});
app.get("/update",function (req,res) {
    User.update({user:"xiaoming"},{'$set':{age:99}},function (err,doc) {
        if(!err){
            res.json(doc);
        }
    });
    // res.json({name:"jm",age:"27"})
});
app.listen(9093,function () {
    console.log("Node app start at port 9093");
});