import fetch from "utils/fetch";

export const addAccounts = data => {
    return fetch({
        url: "/api/v1/accounts/",
        method: "post",
        params: data
    });
};

export const getAccounts = () => {
    return fetch({
        url: "/api/v1/accounts/",
        method: "get"
    });
};

export const addGroupAccounts = accounts => {
    let data = [];
    const { email } = accounts;
    email.forEach(val => {
        data.push({ ...accounts, email: val });
    });
    return fetch({
        url: "/api/v1/accounts/group-create/",
        method: "post",
        params: data
    });
};

export const getAccountsById = id => {
    return fetch({
        url: `/api/v1/accounts/${id}/`,
        method: "get"
    });
};

export const editAccounts = (id, data) => {
    return fetch({
        url: `/api/v1/accounts/${id}/`,
        method: "put",
        params: data
    });
};
