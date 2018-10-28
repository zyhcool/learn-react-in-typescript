import * as Koa from "koa";
import * as koaBody from "koa-body";
import * as Route from "koa-route";
// import * as qs from "querystring";
// import * as getSearchData from "./service";

let app = new Koa();

/*设置路由*/
// app.use(Route.get('/ajax/search',function*(){
//     console.log("88");
//     this.set('Cache-Control','no-cache');
//     this.set('Access-Control-Allow-Origin','*');
//     let params = qs.parse(this.req.url!);
//     console.log(params);
//     return true;
//     // let key: any = params.key;
//     // let start: any = params.start;
//     // let end: any = params.end;
//     // this.body = yield getSearchData(key,start,end);
// }));

const main = (ctx: any) => {
    console.log(ctx.request.body);
    return;
};

app.use(koaBody());
app.use(Route.post("/",main));

app.listen(4001);
console.log('Koa server is started');
