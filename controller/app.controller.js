// const app = require('../model/app.model')

// exports.findAll = (req, res) => {
//     app.find()
//         .then((data) => {
//             res.send(data);
//         }).catch((err) => {
//             res.status(500).send({
//                 user:
//                     err.user || "occured error"
//             })
//         })
// }

const app = require("../model/app.model");

exports.findAll = (req, res) => {
    app.find()
        .then((data) => {
            res.send(data)
        }).catch((err) => {
            res.satus(500).send({
                user:
                    err.user || "Some error occurred while retrieving messages.",
            })
        })
}