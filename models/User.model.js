import mongoose from "mongoose";

// User schema
const userSchema = new mongoose.Schema({
    firtName: String,
    email: String,
    password: String
})

const UserModel = mongoose.model('Users', userSchema);

export default UserModel;