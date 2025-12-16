import mongoose from "mongoose";


const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}


/**
 * In Next.js, files can be executed multiple times
 * (API routes, Server Actions, hot reload, serverless)
 *
 * So we store the MongoDB connection in a global variable
 * to REUSE the same connection instead of creating new ones.
 */
let cached = global.mongoose;

/**
 * If the global cache does not exist,
 * initialize it with:
 *  - conn: the actual  DB connection
 *  - promise: the ongoing connection promise
 */
if (!cached) {
  cached = global.mongoose = {
    conn: null,     // stores the resolved mongoose connection
    promise: null,  // stores the connection ko promise
  };
}

export async function connectToDatabase(){
    //if already have db connection return immediately,reuse same connection
      if (cached.conn) {
    return cached.conn;
  }

 /**
If there is no connection promise yet, then create a new one
   */
     if(!cached.promise){
        //     * Mongoose connection options
const options={
    bufferCommands:true, // queue db operation until conected
    maxPoolSize: 10, //  max no of connections in the database pool
}

 /**
     * Create the MongoDB connection
     * Store the promise so other calls can await it
     */
  cached.promise = mongoose
      .connect(MONGODB_URI, options)
       .then((mongooseInstance) => {
            console.log('✅ Database connected successfully')
                return mongooseInstance
       });

     }

      /**
   * STEP 3:
   * Await the connection promise
   * If successful, store the connection in cache
   */
  try{
    cached.conn=await cached.promise

  }
   catch(error){
    //if connection failed
           cached.promise = null; // Reset the promise on error
console.error("Failed to connect to MongoDB", error);
   }
   //return cached connection
     return cached.conn;

}