// module.exports = (app) => {
//     const App = require('../controller/app.controller')
//     const Users = require('../model/app.model')
//     app.post("/create", async (req, res) => {
//         try {
//             const user = new Users(req.body);
//             const savee = await user.save();
//             res.send(savee)
//         }
//         catch (e) {
//             console.log("app", e);
//         }
//     })
// } 
module.exports = (app) => {
    const Appp = require("../controller/app.controller")
    const users = require("../model/app.model")

    app.post("/create", async (req, res) => {
        try {
            const user = new users(req.body);
            const save = await user.save();
            res.send(save);
        } catch (e) {
            console.log("hello", e);
        }
    })
}