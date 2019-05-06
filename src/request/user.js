import fetch from "utils/fetch";

export const adminSignIn = (email, password) => {
    return fetch({
        url: "/api/v1/auth/login",
        signIn: true,
        method: "post",
        params: {
            login: email,
            password: password
        }
    });
};
