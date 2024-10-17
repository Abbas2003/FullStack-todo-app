import mongoose from "mongoose"


export async function connectDB() {
    let isConnected = false
    if(isConnected) return "DB is already connected"

    try{
        let connected = await mongoose.connect(process.env.MONGODB_URI)
        if(connected.connection.readyState == 1) isConnected = true 
        console.log("DB connected successfully")
    }
    catch(err){
        console.log(err)
    }
}