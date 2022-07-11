/*
 * @Descripttion: 
 * @Date: 2022-07-11 10:19:24
 * @LastEditTime: 2022-07-11 11:08:00
 */
import { getUserRouters } from "@/services"
import { formatRouterTree } from '../libs/utils'

export default {
    async setUserRouters({ commit, state }) {
        const userRouters = await getUserRouters(state.uid)
        const payload = formatRouterTree(userRouters)
        
        commit('setUserRouters', payload)
        commit('setAuth', true)
    }
}