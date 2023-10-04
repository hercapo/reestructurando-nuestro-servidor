export const isConnected = (req, res, next) => {
    if(req.session.user) return res.redirect("/api/products")
    next();
}

export const isDisconnected = (req, res, next) => {
    if(!req.session.user) return res.redirect("/login")
    next();
}

export const isAdmin = (req, res, next) => {
    if(req.session.user.role === "Admin") {
        console.log("Es admin");
        //todo: cambiar el email, al email actual mas un tick de admin
        // return req.session.user.email += "V";
    }
    next();
}