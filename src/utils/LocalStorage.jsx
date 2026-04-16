export let storage = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    },
    get: (key) => {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
    },
    remove: (key) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    },
}