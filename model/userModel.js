import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  photo: {
    type: String,
  },
});


export default mongoose.model("User",userSchema)