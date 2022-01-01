function getAdmin(map){
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const USERS = new Map();

USERS.set('Lucas', 'Admin');
USERS.set('Rafael', 'Admin');
USERS.set('Joana', 'User');
USERS.set('Luiza', 'Admin');

console.log(getAdmin(USERS));
