import * as http from "http";
import * as qs from "querystring";

let getSearchData = (key: any, start: any, end: any) => {
    return (cb: any) => {
        let data = {
            key,
            start,
            end,
        };
        /*请求MobAPI里的火车票查询接口*/
        let content = qs.stringify(data);
        let httpRequest = {
            hostname: 'apicloud.mob.com',
            port: 80,
            path: '/train/tickets/queryByStationToStation?' + content,
            method: 'GET',
        };

        let req = http.request(httpRequest, (response: any) => {
            let body = '';
            response.setEncoding('utf-8');
            response.on('data', (chunk: any) => {
                body += chunk;
            });
            response.on('end', () => {
                cb(null, body);
            });
        });

        req.end();
    };
};

export default getSearchData;
