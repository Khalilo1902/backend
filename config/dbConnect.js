import mongoose from "mongoose"

const dbConnect = ()=>{
    try{
        mongoose.connect(process.env.SERVER_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log(`DataBase Connected`)

    }catch(error){console.log(error)}
}

export default dbConnect