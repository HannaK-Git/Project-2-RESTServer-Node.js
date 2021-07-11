const mongoose = require('mongoose');

let UsersSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        street: String,
        city: String,
        zipcode: Number,
        tasks: [{id: String,
            title: String,
            completed: Boolean
        }],
        posts: [{id: String,
            title: String,
            body: String
        }]

     }
)

module.exports = mongoose.model('users', UsersSchema);