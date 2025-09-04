import mongoose from "mongoose";

type ConnectionObject = {
     isConnected? : number 
}

const connection : ConnectionObject = {}

async function dbConnet() : Promise<void> {
    if(connection.isConnected){
        console.log("Already Connected to database")
    }
    try{
    const db= await mongoose.connect(process.env.MONGODB_URI || "")
    connection.isConnected= db.connections[0].readyState
    console.log("DB Connected Successfully")
    }
    catch (error){
        process.exit
    }
}
export default dbConnet;