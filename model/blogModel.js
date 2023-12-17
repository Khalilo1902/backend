import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    _userId: {
      type: String,
      
    },
    title: {
      type: String,
      
    },
    content: {
      type: String,
      
    },
    date: {
      type: Date,
      default: new Date().toISOString(),
    },
    imgUrl: {
      type: String,
      
    },
  });
  
  export default mongoose.model("Blog",blogSchema)