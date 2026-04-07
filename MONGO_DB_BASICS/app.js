const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mysticsruthi:Renstimpy%40123@cluster0.x2t03aq.mongodb.net/').then(() => {
    console.log("Database connected")
}).catch(e => console.log("Error",e))

//Create Schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
    createdAt:{type:Date,default:Date.now}
})

//Create User Model
const UserModel = mongoose.model('User',userSchema)

async function runQueryExamples() {
    try{
        // Create a new document
        /*const newUser = await UserModel.create( {
            name:'Ravi Kiran',
            email:'ravi@gmail.com',
            age:40,
            isActive:true,
            tags:['developer','designer','manager']
        }
        )
       const newUser = new UserModel( {
            name:'John Doe',
            email:'john@gmail.com',
            age:20,
            isActive:false,
            tags:['developer']
        }
        )
        await newUser.save()
        console.log('Created New User', newUser)*/

        //const allUsers = await UserModel.find({});
        //console.log("Users -->", allUsers);

        //const getUsersOfActiveFalse = await UserModel.find({isActive:false})
        //console.log("Users -->", getUsersOfActiveFalse);

        //const getUsersOfActiveFalse = await UserModel.findOne({isActive:true})
        //console.log("Users -->", getUsersOfActiveFalse);
        
        //const getLastCreatedUserByUserId = await UserModel.findById(newUser._id)
        //console.log(getLastCreatedUserByUserId, "getLastCreatedUserByUserId")

        //const selectedFields = await UserModel.find().select('name email -_id')
        //console.log(selectedFields)

        //const limitedUsers = await UserModel.find().limit(3).skip(1)
        //console.log(limitedUsers)

        //const sortedUsers = await UserModel.find().sort({ age: -1 });
        //console.log(sortedUsers)

        //const countDocuments = await UserModel.countDocuments({isActive:false})
        //console.log(countDocuments)

        /*const newUser = new UserModel( {
            name:'Deleted User',
            email:'deleteduser@gmail.com',
            age:20,
            isActive:false,
            tags:['developer']
        }
        )
        await newUser.save()
        console.log('Created New User', newUser)
        const deletedUser = await UserModel.findByIdAndDelete(newUser._id)
        console.log('Deleted User', deletedUser)*/

        const newUser = new UserModel( {
            name:'Updated User',
            email:'dupdateduser@gmail.com',
            age:20,
            isActive:false,
            tags:['developer']
        }
        )
        await newUser.save()
        console.log('Created New User', newUser)

        const updateUser = await UserModel.findByIdAndUpdate(newUser._id, {
            $set:{age:100}, $push:{tags:'updated'}
        },{new:true}) // This will return updated value

        console.log(updateUser,'User')
    } catch(e) {
        console.log('Error -->',e)
    } finally {
        await mongoose.connection.close()
    }
}

runQueryExamples()