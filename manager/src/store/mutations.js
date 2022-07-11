/*
 * @Descripttion: 
 * @Date: 2022-07-11 10:19:31
 * @LastEditTime: 2022-07-11 10:53:14
 */
export default{
    setAuth(state,auth){
        state.hasAuth = auth;
    },
    setUserRouters(state,userRouters){
        state.userRouters = userRouters;
    }
}