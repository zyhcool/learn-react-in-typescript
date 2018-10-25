import * as mongo from "mongodb";
import config from "./common/config";


let MongoClient = mongo.MongoClient;

let url = config.mongo.url;

MongoClient.connect(url,(err: any,res: any)=>{
     if(err){
         throw{err};
     }
     console.log("数据库已连接");

     res.close();
 });
