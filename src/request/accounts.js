import fetch from "utils/fetch";

export const login = data => {
  return fetch({
    url: "/api/v1/auth/login",
    method: "post",
    signIn: true,
    params: data
  });
};

export const register = data => {
  return fetch({
    url: "/api/v1/auth/register",
    method: "post",
    params: data
  });
};

export const getClientsById = id => {
  return fetch({
    url: `/api/v1/clients/${id}/`,
    method: "get"
  });
};

export const changePassword = data => {
  return fetch({
    url: `/api/v1/auth/change-password`,
    method: "post",
    params: data
  });
};

export const updateClients = (id, data) => {
  return fetch({
    url: `/api/v1/clients/${id}/`,
    method: "patch",
    params: data
  });
};
