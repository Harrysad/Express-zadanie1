const User = require("../models/UserModel");

module.exports = {
    index: async (_req, res) => {
        try {
            const users = await User
            .find()
            .lean();
            res.render('home', {users});
        } catch (err) {
            res.status(500).send(err);
        };
    }
};