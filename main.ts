// import * as mongo from "mongodb";
// import config from "./common/config";

let MongoClient = require("mongodb").MongoClient;
let config = require("./common/config");

let url = "mongodb://localhost:27017/mytest";

MongoClient.connect(url,(err:any,res:any)=>{
     if(err){
         throw{err};
     }
     console.log("数据库已连接");

     res.close();
 });
