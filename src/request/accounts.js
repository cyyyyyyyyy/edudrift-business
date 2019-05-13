import fetch from "utils/fetch";

export const addAccounts = data => {
    return fetch({
        url: "/api/v1/accounts/",
        method: "post",
        params: data
    });
};

export const getAccounts = page => {
    return fetch({
        url: "/api/v1/accounts/",
        method: "get",
        params: {
            page: page
        }
    });
};

export const searchAccountsByEmail = email => {
    return fetch({
        url: "/api/v1/accounts/",
        method: "get",
        params: {
            search: email
        }
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

export const getAccountsByIds = ids => {
    return fetch({
        url: `/api/v1/accounts/group-retrieve/`,
        method: "post",
        params: ids
    });
};

export const editAccounts = (id, data) => {
    return fetch({
        url: `/api/v1/accounts/${id}/`,
        method: "put",
        params: data
    });
};

export const accountsChangePassword = (id, password) => {
    return fetch({
        url: `/api/v1/accounts/${id}/set-password/`,
        method: "post",
        params: {
            password: password
        }
    });
};

export const deleteAccounts = email => {
    return fetch({
        url: "/api/v1/accounts/group-delete/",
        method: "post",
        params: email
    });
};

export const groupAccountsEdit = data => {
    return fetch({
        url: "/api/v1/accounts/group-update/",
        method: "post",
        params: data
    });
};

/**
 * client 相关接口
 * */

export const getClients = () => {
    return fetch({
        url: "/api/v1/clients/",
        method: "get"
    });
};

export const searchClientByEmail = email => {
    return fetch({
        url: "/api/v1/clients/",
        method: "get",
        params: {
            search: email
        }
    });
};

export const getClientsById = id => {
    return fetch({
        url: `/api/v1/clients/${id}/`,
        method: "get"
    });
};

export const updateClients = (id, data) => {
    return fetch({
        url: `/api/v1/clients/${id}/`,
        method: "patch",
        params: data
    });
};

/**
 * institution 相关接口
 * */

export const getInstitutions = () => {
    return fetch({
        url: "/api/v1/institutions/",
        method: "get"
    });
};

export const searchInstitutionsByEmail = email => {
    return fetch({
        url: "/api/v1/institutions/",
        method: "get",
        params: {
            search: email
        }
    });
};

export const getInstitutionsById = id => {
    return fetch({
        url: `/api/v1/institutions/${id}/`,
        method: "get"
    });
};

export const updateInstitutions = (id, data) => {
    return fetch({
        url: `/api/v1/institutions/${id}/`,
        method: "patch",
        params: data
    });
};

/**
 * organizers 相关接口
 * */

export const getOrganizers = () => {
    return fetch({
        url: "/api/v1/organizers/",
        method: "get"
    });
};

export const getOrganizersByEmail = email => {
    return fetch({
        url: "/api/v1/organizers/",
        method: "get",
        params: {
            search: email
        }
    });
};

export const getOrganizersById = id => {
    return fetch({
        url: `/api/v1/organizers/${id}/`,
        method: "get"
    });
};

export const updateOrganizers = (id, data) => {
    return fetch({
        url: `/api/v1/organizers/${id}/`,
        method: "patch",
        params: data
    });
};
