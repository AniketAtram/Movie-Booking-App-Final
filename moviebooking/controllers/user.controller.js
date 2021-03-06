const db = require("../models");
const TokenGenerator = require("uuid-token-generator");
const {
    uuid
} = require("uuidv4");
const {
    atob,
    btoa
} = require("b2a");
const tokenGenerator = new TokenGenerator();
const User = db.users;

async function signUp(req, res) {
    const {
        email,
        first_name,
        last_name,
        contact,
        password,
    } = req.body;
    const newUser = new User({
        userid: uuid(),
        email,
        first_name,
        last_name,
        contact,
        password,
    });

    // console.log(first_name);
    User.findOne({
        email: email
    }, (err, user) => {
        if (err || user === null) {
            newUser.save((err, user) => {
                if (err)
                    return res.status("400").send(err.message || "some error occurred");
                res.status(200).send("OK");
            });
        } else {
            res.status(400).send("User Already Exists.");
        }
    });
}

async function login(req, res) {
    //decrypt username and password by seperating the basic word
    try {
        const encodedAuth = req.headers.authorization;
        const userNameAndPassword = atob(encodedAuth.split(" ")[1]);
        const username = userNameAndPassword.split(":")[0];
        const password = userNameAndPassword.split(":")[1];
        const user = await User.findOne({
            username: username
        });
        if (user === null) throw new Error("user not found");
        if (user.password === password) {
            user.isLoggedIn = true;
            user.uuid = uuid();
            user.accesstoken = tokenGenerator.generate();
            User.findOneAndUpdate({
                    username: username
                }, user, {
                    useFindAndModify: false,
                })
                .then(updateUser => {
                    if (updateUser === null) throw new Error("Unable to update user");
                    res.status(200).send({
                        id: user.uuid,
                        "access-token": user.accesstoken,
                    });
                })
                .catch(err => {
                    res.status(500).send(err.message || "login failed");
                });
        } else {
            res.status(401).send("username and password dont match");
        }
    } catch (err) {
        res.status(500).send(err.message || "user not found");
    }
};

async function logout(req, res) {
    const uuid = req.body.uuid;
    const update = {
        isLoggedIn: false,
        accesstoken: "",
        uuid: ""
    };
    User.findOneAndUpdate({
            uuid: uuid
        }, update, {
            useFindAndModify: false
        })
        .then(data => {
            if (data === null) throw new error("unable to logout");
            res.send({
                message: "Logged Out successfully."
            });
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
};

module.exports = {
    signUp,
    login,
    logout
}