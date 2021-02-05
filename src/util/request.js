
import axios from "axios";

//简单的二次封装axios

let Request = {
    getData({ url, data = {}, method = "get" }) {
        return new Promise((resolve, reject) => {
            this._getReq(url, method, data, resolve, reject)
        })
    },
    _getReq: function (url, method = "get", data = {}, resolve, reject) {
        let format = method == "get" ? "params" : "data";

        axios({
            url: url,
            method: method,
            [format]: data,
        }).then(res => {
            resolve(res)
        }).catch(() => {
            reject();
        })
    }
}
export { Request }