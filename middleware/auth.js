const jwt = require("jsonwebtoken")

exports.auth = async (req, res, next) => {
    try {
        let token = null;

        const { authorization } = req.headers;
        // console.log("authorization=========>", authorization);
        if (authorization && authorization.startsWith("Bearer")) {
            token = authorization.split(" ")[1];
        }
        const isValid = jwt.verify(token, process.env.JWT_SECRET)
        // console.log("isValid===================>", isValid);
        req.userId = isValid.userId;
        // console.log("userId=================>", req.userId)
        next();
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}