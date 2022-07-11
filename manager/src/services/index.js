/*
 * @Descripttion: 
 * @Date: 2022-07-11 09:50:31
 * @LastEditTime: 2022-07-11 09:58:28
 */
import axios from 'axios';
import qs from 'qs'

function getUserRouters(uid){
    return axios({
        url: 'http://localhost:3000/user_router_auth',
        method: 'post',
        header:{
            'Content-Type': 'application/x-www-form-urllencoded',
        },
        data: qs.stringify({ uid })
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        throw err
    })
}

export {
    getUserRouters
}