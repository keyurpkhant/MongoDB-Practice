const mongoose = require('mongoose');
const dotenv = require('dotenv');
const restaurantSchema = require('./model/restaurantModel');
const userSchema = require('./model/userModel');
const orderSchema =require('./model/orderModel');

dotenv.config();
mongoose.connect(
    process.env.CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));


// First time user registartion

db.once('open',function(){
    console.log("Connected");

    const userDataCollection = mongoose.model('user',userSchema,'users');
    // const userObj= new userDataCollection({
    //     firstName:'Darshan',
    //     lastName:'Ajudiya',
    //     email:'darshan@gmail.com',
    //     password:'darshan',
    //     birthDate:new Date(),
    //     gender:'Male',
    //     mobileNumber:5621,
    //     role:['DE'],
    //     deliveryExecutive:{
    //         vehicleNumber:"101-101-1111",
    //         deliveryExecutiveLocation:{
    //             address:"abc",
    //             city:"Gandhinagar",
    //             zip:382745,
    //             state:"Gujarat",
    //             country:"India",
    //             latitude:13.252564,
    //             longitude:14.25645, 
    //         },
    //         activityStatus:true,
    //         deliveryExecutiveRatings:[]
    //     }
    // })
    let userObj= new userDataCollection({
        firstName:'Keyur',
        lastName:'Khant',
        email:'keyurk@gmail.com',
        password:'keyur',
        birthDate:new Date(),
        gender:'Male',
        mobileNumber:1111,
        role:['GEN'],
    })

    console.log("UserObject Data:",userObj);
    userObj.save(function(err,user){
        if(err) console.log(err.message);
        else{
            console.log("User Data=>",user);
        }
    })

    userDataCollection.find(function(err,user){
        if(err){
            console.error(err);
        }
        console.log(err);
        console.log(user);
    });

})



