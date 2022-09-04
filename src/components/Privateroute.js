
export function Aprivateroute({ children }) {
    const auth = window.localStorage.getItem("adminToken");
    return auth ? children : window.location = "/adminlog"
}

export function Uprivateroute({ children }) {
    const auth = window.localStorage.getItem("accessToken");
    return auth ? children : window.location = "/login"
}