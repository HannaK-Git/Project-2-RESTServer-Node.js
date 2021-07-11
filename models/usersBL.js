const User = require('../models/usersModel');

exports.getAllUsers = function()
{
    return new Promise((resolve, reject) =>
    {
        User.find({}, function(err, data) 
        {
            if(err)
            {
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}


exports.getUserById = function(id)
{
    return new Promise((resolve, reject) => 
    {
        User.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
}


exports.addUser = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let newUser = new User({
            name: obj.name,
            
             email: obj.email,
             street: obj.street,
             city: obj.city,
             zipcode: obj.zipcode,
            tasks: obj.tasks,
        posts: obj.posts
        })
        newUser.save(function(err)
        {
            if(err)
            {
                reject(err);
            }
            else{
                resolve('Created!');
            }
        })
    })
}

exports.updateUser = function(id, obj)
{
    return new Promise((resolve, reject) =>
    {
        User.findByIdAndUpdate(id, {
            name: obj.name,
            
             email: obj.email,
             street: obj.street,
             city: obj.city,
             zipcode: obj.zipcode,
            tasks: obj.tasks,
        posts: obj.posts
        }, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else{
                resolve('Updated!')
            }
        })
    })
}

exports.deleteUser = function(id)
{
    return new Promise((resolve, reject)=>
    {
        User.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else{
                resolve('Deleted');
            }
        })
    })
}