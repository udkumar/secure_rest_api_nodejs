const userSchema = new Schema({
   firstName: String,
   lastName: String,
   email: String,
   password: String,
   permissionLevel: Number
});


// attach the above schema to the user model.
const userModel = mongoose.model('Users', userSchema);