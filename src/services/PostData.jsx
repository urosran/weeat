import { resolve } from "path";

export function PostData(type, userData){
    let baseURL = 'https://api.mailxengine.com/rest';
    return new Promise((resolve, reject)=>{
        fetch(baseURL+type,{
            method:"POST",
            body: JSON.stringify(userData)
        })
        .then((response)=>response.json())
        .then((res)=>{
            resolve(res);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}