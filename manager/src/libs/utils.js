/*
 * @Descripttion: 
 * @Date: 2022-07-11 10:29:55
 * @LastEditTime: 2022-07-11 10:50:39
 */

// 扁平数组转树
function formatRouterTree(data){
    let parents = data.filter(({pid}) => pid === 0)
    let children = data.filter(({pid})=> pid !== 0)

    dataToTree(parents,children)

    function dataToTree(parents,children) {
        parents.map(p=>{
            children.map((c,i)=>{
                if(c.pid === p.id){
                    // 深拷贝一份数据
                    let _c = JSON.parse(JSON.stringify(children))
                    _c.splice(i,1)
                    dataToTree([c],_c)

                    if(p.children) {
                        p.children.push(c)
                    } else{
                        p.children = [c]
                    }
                }
            })
        })
    }

    return parents
}

export {
    formatRouterTree
}