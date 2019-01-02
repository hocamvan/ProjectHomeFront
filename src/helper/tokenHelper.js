export function getToken() {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
};

export function getClubId() {
    return  localStorage.getItem("clubId");
};


export function hasToken() {
    const token = localStorage.getItem("token");
    return token !== undefined;
};