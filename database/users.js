const users = [{
    username: "singned_in_user@expample.com",
    password: "strong_password"
}];

function get_user({username}) {
    return users.find(function (user) {
        return user.username === username;
    });
}

function create_user({user}) {
    if (get_user({user: user.username}) !== undefined) {
        throw 'USER_EXISTS'
    }
    users.push(user);
}

module.exports = {get_user, create_user};
