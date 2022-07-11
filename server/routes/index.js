/*
 * @Descripttion: 
 * @Date: 2022-07-11 08:23:39
 * @LastEditTime: 2022-07-11 10:31:17
 */
const router = require('koa-router')()

const users = require('../data/user')
const routers = require('../data/router')

// 实际上接口不能这样直接暴露出去，应当加中间件进行访问权限拦截
router.post('/user_router_auth',async (ctx, next) => {
  const { uid } = ctx.request.body

  if(uid){
    let authRouterInfo = []

    const userInfo = users.filter(user => user.id == uid)[0]
    userInfo.auth.map((rid)=>{
      routers.map((router)=>{
        if(router.id === rid){
          authRouterInfo.push(router)
        }
      })
    })
    
    ctx.body = authRouterInfo
  }
  next()
})

module.exports = router
