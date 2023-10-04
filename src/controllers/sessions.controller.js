// import passport from "passport";

export const registerSession = async (req, res) => {
    res.send({ status: "success", message: "User registered" });
};

export const failedRegister = (req, res) => {
    res.status(400).send({ status: "error", error: "Registry fail" });
}

export const loginSession = async (req, res) => {
    if (!req.user)
        return res
            .status(400)
            .send({ status: "error", error: "Incorrect credentials" });

    req.session.user = {
        name: `${req.user.first_name} ${req.user.last_name}`,
        email: req.user.email,
        age: req.user.age,
        role: req.user.role
    };
    res.send({
        status: "success",
        payload: req.session.user,
        message: "You logged in.",
    });
}

export const failedLogin = (req, res) => {
    res.status(400).send({ status: "error", error: "Login fail" });
};

export const logout = (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return res.status(500).send({status: "error", error: "Couldn´t logout."})
        }
        res.redirect("/login");
    })
};

export const githubCallback = (req, res) => {
    req.session.user = req.user;
    res.redirect("/")
};