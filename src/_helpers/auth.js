export function accessHeader() {
    // Return authorization header with JWT token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.access) {
        return { 'Authorization': 'Bearer ' + user.access };
    } else {
        return {};
    }
}

export function refreshData() {
    // Return authorization header with JWT token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.refresh) {
        return { 'refresh': user.refresh };
    } else {
        return {};
    }
}
