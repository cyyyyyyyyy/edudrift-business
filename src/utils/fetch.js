import axios from "axios";
import tokenHelper from "./tokenHelper";

const fetch = function({ url, method, params, headers, baseURL, signIn }) {
    let options = {
        method: method,
        url: url,
        baseURL: "/"
    };

    headers = {
        ...headers,
        "Content-Type": "application/json; charset=utf-8"
    };

    if (!signIn) {
        headers = {
            ...headers,
            Authorization: `Token ${tokenHelper.getToken()}`
        };
    }

    options = {
        ...options,
        headers: headers,
        data: JSON.stringify(params)
    };

    return new Promise((resolve, reject) => {
        axios
            .request(options)
            .then(res => {
                console.log(res);
                const { status } = res;
                if (status >= 200 && status < 300) {
                    resolve({ data: res.data, success: true });
                }
            })
            .catch(err => {
                reject({ message: err, success: false });
            });
    });
};

export default fetch;