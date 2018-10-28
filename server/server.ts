// import * as fs from "fs";
import * as Koa from "koa";
import * as koaBody from "koa-body";

let app = new Koa();

const main = (ctx: any) => {
    const body = ctx.request.body;
    if(!body.name){
        ctx.throw(400,"name required");
    }
    ctx.body = body;
};


app.use(koaBody());
app.use(main);

app.listen(4000);




console.log("server start");
