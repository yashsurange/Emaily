const mongoose=require('mongoose');
const { Schema } = mongoose;



const userSchema = new Schema({
  googleId : String
});

mongoose.model('users',userSchema);




// NK0J64v3aXo7veP0
// mongodb+srv://Myuser:NK0J64v3aXo7veP0@cluster0-3ifu2.mongodb.net/test?retryWrites=true&w=majority
