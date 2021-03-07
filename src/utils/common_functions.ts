import axios from 'axios';


export function requestMock(paramd?: {

}) {
    let data:any[] = [];

    let mockData:any = [
        {
            id: 1,
            title: 'title 1',
            coords: [],
        },
        {
            id: 2,
            title: 'title 2',
            coords: [],
        },
        {
            id: 3,
            title: 'title 3',
            coords: [],
        },
        {
            id: 4,
            title: 'title 4',
            coords: [],
        },
    ];

    const returnData = () =>  {
        data = mockData;
        return data;
    }

    setTimeout(() => returnData(), 100);

    return new Promise((resolve, reject) => (
        setTimeout(() => returnData(), 100))
    ).then((response) => {
        return data || [];
    })
}

export function requestApi(params:any) {
    //let data:any[] = [];

    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
    };


    new Promise((resolve, reject) => (
        axios({
            method: params.method,
            url: params.url + params.action,
            data: params.request,
            headers: headers
        })
            .then((response:any) => {
                if (response.status === 200) {
                    resolve({status: "ok", message: "Done", data: response.data })
                }
            })
            .then((resp:any) => {
                return resp;
            }).catch((error:any) => {
            reject({status: "error", message: "Error", data: {error: error}})
        })
    ))

    //return data;
}
