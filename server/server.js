const  express=require("express");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
// 引入user
const  userRouter=require("./user");

// 类似于mysql的表， mongo里有文档、字段的概念
const  app=express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user",userRouter);

app.listen(9093,function () {
    console.log("Node app start at port 9093");
});