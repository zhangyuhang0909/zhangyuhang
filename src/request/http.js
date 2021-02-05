import { Request } from "@/util/request.js"

//获取接口的公共的配置文件

//登录接口
export const login = (obj, data) => Request.getData({
    url: `/api/user/login.do?username=${obj.username}&password=${obj.password}`,
    method: "post",
    // data
})



//首页接口
export const HomeRight = Request.getData({
    url: `/api/statistic/base_count.do`,
    method: "get",
    // data
})

//商品管理接口
// export const Product = Request.getData({
//     url:`/api/manage/product/list.do`,
//     method:"get"
// })
//订单列表接口
export const Orders = (obj, data) => Request.getData({
    url: `/api/order/list.do`,
    method: "post"
})
// 用户列表接口
export const User = (obj, data) => Request.getData({
    url: `/api/user/list.do`,
    method: "post"
})
//用户列表分页器
export const List = data => Request.getData({
    url: `/api/user/list.do?pageNum=${data}`,
    method: "post"
})